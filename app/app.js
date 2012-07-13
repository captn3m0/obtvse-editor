define(['jquery','simrou','github','framework','underscore','yaml','editor'], function($,Simrou,Github,Framework,Underscore,Yaml,Editor) {
  var _ = new Framework('#admin'),repo=false;

  var app = new Simrou({
    '/': function() {
      _.render('views/admin-login.jade',null,function(){
      	$('#username').keyup(function(e){
      	  console.log(e.target.value);
      	  $("#repository").val(e.target.value+".github.com");
      	})
      });
    },
    '/login':{
      post:function(a,b,c) {
      	var username = $('#username').val();
      	var password = $('#password').val();
      	if(username && password)
      	 var gh=new Github({auth:'basic',username:username,password:password});
      	else
      	 var gh=new Github({auth:false});//This remains unauthenticated
      	repo = new gh.getRepo(username,$('#repository').val());
        //Now that we have created our repo instance, we can go to better stuff
        app.navigate('#/manage');
      }
    },

    // The main admin backend for listing drafts and other posts
    // drafts and posts are lifted from the _drafts and _posts folder

    '/manage':function() {
      app.requireLogin();
      //default object used for rendering
      posts = {
        drafts:false,publish:false
      };
      _.render('views/admin-backend.jade',posts);
      //Make two requests to the _posts and _drafts folder to fill them up
      repo.getTree($("#branch").val() || 'master', function(err,tree) {
        for(i=0,_length=tree.length;i<_length;i++) {
          var obj = tree[i];
          if(obj.path==='_drafts') {
            repo.getTree(obj.sha, function(err,res) {
              posts.drafts = res.reverse();
              _.render('views/admin-backend.jade',posts);
            });
          }
          if(obj.path==='_posts') {
            repo.getTree(obj.sha, function(err,res) {
              posts.publish = res.reverse();
              _.render('views/admin-backend.jade',posts);
            });
          }
        }
      });
    },

    // Create a post
    '/post/create':function() {

    },

    '/edit/:sha/*path':function(e,params) {
      app.requireLogin();
      repo.getBlob(params.sha, function(err,res) {
        var yaml=false;
        if(res.substring(0,3)==='---'){
          //We have some YAML;
          var yamlText = res.substring(4, res.substring(3).indexOf('---')+2);
          yaml = Yaml.eval(yamlText);
        }

        var post = {
          content:res,
          yaml:yaml,
          sha:params.sha,
          title:(yaml&&yaml.title)||path,
          draft: !("_posts"===params.path.substr(0,6))
        };
        _.render('views/post-edit.jade', post, function() {
          Editor.editable('#text-content');
          Editor.attachEvents();
        })
      });
    }
  });
  app.requireLogin = function() {
    if(repo===false) {
      var gh=new Github({auth:false});//This remains unauthenticated
      repo = new gh.getRepo('captn3m0','captn3m0.github.com');
    }
  }
  return app;
});
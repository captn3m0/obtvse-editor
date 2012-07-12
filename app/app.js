define(['jquery','simrou','github','framework','underscore'], function($,Simrou,Github,Framework,Underscore) {
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
    '/manage':function() {
      app.requireLogin();
      //default object used for rendering
      posts = {
        drafts:false,publish:false
      };
      _.render('views/admin-backend.jade',posts);
      //Make two requests to the _posts and _drafts folder to fill them up
      repo.getTree($("#branch").val(), function(err,tree) {
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
    '/post/create':function() {

    }
  });
  app.requireLogin = function() {
    if(repo===false)
      this.navigate('/');
  }
  return app;
});
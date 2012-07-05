(function(){
  /**
   * Configuration Stuff 
   */
  var config_gist_id = 2936166;
  //Fork https://gist.github.com/2936166 to use as a template
  var posts_per_page = 3;
  var configUrl = 'https://api.github.com/gists/'+config_gist_id;
  var configUrl = 'mock/gist.json';//development purposes
  
  var mkd = new Showdown.converter();
  
  // initialize the application
  var app = Sammy('html', function() {
    this.authError = function(){
      console.log('authentication error');
    };
    // include plugins
    this.use('Jade');
    this.use('Store');
    var store=new Sammy.Store();
    
    this.get('#/',function(context){
      
      //on home page we show the last 3 posts
      postsToShow = app.config.posts.slice(0,posts_per_page);
      var renderedPosts =[];
      var renderPosts = function(){
        if(renderedPosts.length != postsToShow.length)
          return false;
        //Now everything is rendered
        //We need to just join them together and render
        var isAuth = store.exists('username');
        context.render('views/post-index.jade',{posts:renderedPosts,isAuth:isAuth,time:renderedPosts[0].time,paging:{l:false,r:true},page:{prev:0,next:1}})
        .then(function(content){
          var data = {app:app.config,body:content};
          context.render('views/post-layout.jade',data).swap();
        });
      }
      for(i=0;i<postsToShow.length;i++){
        
        (function(id){
          
          var Url = 'https://api.github.com/gists/'+postsToShow[i].id;
          var Url = 'mock/'+postsToShow[i].id+'.json';
          
          $.getJSON(Url,
          function(json){
            var file;
            for(i in json.files){
              file = json.files[i];
                if(file.type==='text/plain'||file.type==='Markdown')
                  break;
            }
            var post = postsToShow[id];
            var months = ['January','Februrary','March','April','May','June',"July","August","September","October","November","December"]
            var date = new Date(Date.parse(json.updated_at));
            post.time=months[date.getMonth()]+' '+date.getDate()+', '+date.getFullYear();
            post.title_html = mkd.makeHtml(post.title);
            post.content_html = mkd.makeHtml(file.content);
            renderedPosts[id] = post;
            renderPosts();//try to renderPosts
          })
        })(i);
      }
    });
    
    this.get('#/admin/',function(){
      if(!store.exists('username'))
        this.redirect('#/admin/login');
      //We are at the main admin place.
      var drafts = app.config.posts.filter(function(p){return p.hasOwnProperty('draft');});
      var published = app.config.posts.filter(function(p){return !p.hasOwnProperty('draft');});
      this.render('views/admin-backend.jade',{drafts:false,publish:published})
      .then(function(content){
        this.render('views/admin-layout.jade',{data:content}).swap()
      })
    })
    
    this.get('#/admin/login',function(){
      //if no user login details are present in the store
      if(!store.exists('username')){
        //render the login page here
        this.render('views/admin-login.jade',{username:app.config.github})
        .then(function(content){
          this.render('views/admin-layout.jade',{data:content})
          .then(function(c){
          })
          .swap();
        })
      }
      else{
        //we are already logged in
        //send to /admin
        this.redirect('#/admin/');
      }
    });
    
    this.post('#/admin/login',function(){
      //some details were posted
      store.set("username",this.params['username']);
      store.set("password",this.params['password']);
    });
  });
  
  /**
   * Application initialization for configuration
   */
  var configRequest = $.get(configUrl,function(config){
    app.config = JSON.parse(config.files['config.json'].content);
    app.config.github = config.user.login;
    app.run('#/');//run the app
  });
  
  /**
   * Pre-filter all ajax requests to api.github.com
   * and inject the user/password if we have them
   */
  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    if(options.auth){
      //if it is an authenticated request
      //and we don't have a username stored
      if(!store.exists('username'))
        jqXHR.abort();
    }
  });
  
})();

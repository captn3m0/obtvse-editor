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
        console.log('here');
        //Now everything is rendered
        //We need to just join them together and render
        context.render('views/post-index.jade',{posts:renderedPosts,isAuth:store.exists('username'),date:renderedPosts[0].created,paging:{l:false,r:true},page:{prev:0,next:1}})
        .then(function(content){
          var data = {app:app.config,body:content};
          console.log(data);
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
            post.created=file.updated_at;
            post.time=file.updated_at;
            post.title_html = mkd.makeHtml(post.title);
            post.content_html = mkd.makeHtml(file.content);
            
            renderedPosts[id] = post;
            renderPosts();//try to renderPosts
          })
        })(i);
      }
    });
    
    this.get('#/admin/login',function(){
      //if no user login details are present in the store
      if(!store.exists('username')){
        //render the login page here
        this.render('views/admin-login.jade')
        .then(function(content){
          this.render('views/admin-layout.jade',{data:content})
          .then(function(c){
          })
          .swap();
        })        
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
  //Start the app
  
})();

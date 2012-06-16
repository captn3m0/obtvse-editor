(function(){
  /**
   * Configuration Stuff 
   */
  var config_gist_id = 2936166;
  //Fork https://gist.github.com/2936166 to use as a template
  var posts_per_page = 3;
  var configUrl = 'https://api.github.com/gists/'+config_gist_id;
  var configUrl = 'gist.json';//development purposes
  
  // initialize the application
  var app = Sammy('html', function() {
    // include plugins
    this.use('Jade');
    this.use('Store');
    var store=new Sammy.Store();
    
    this.get('#/admin/login',function(){
      //if no user login details are present in the store
      if(!store.exists('username')){
        //render the login page here
        this.render('views/admin-layout.jade',{body:this.render('views/admin-login.jade')}).swap();
      }
    });
  });
  
  var configRequest = $.get(configUrl)
  .pipe(function(config){
    app.config = JSON.parse(config.files['config.json'].content);
    return $.get('views/header.jade',app.config);
  })
  .pipe(function(template){
    jade.render(template,app.config,function(err,str){
      $('header').html(str);
    })
  })
  
  //Start the app
  app.run('#/');
})();

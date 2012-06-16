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
  var app = Sammy('#container', function() {
    // include plugins
    this.use('Jade');
    this.use('Store');
    var store=new Sammy.Store();
    
    this.get('#/admin/',function(){
      //if no user login details are present in the store
      if(!store.exists('username')){
        //render the login page here
      }
    });
  });
  $.get(configUrl,function(config){
    //we fetch the configuration and store it
    app.config = JSON.parse(config.files['config.json'].content);
    $.get('views/header.jade',function(template){
      $.header.html(
        jade.render(template,app.config,function(err,str){
          if(err) throw err;
          $('header').html(str);
        })
      );
    });
  });
  //Start the app
  app.run('#/');
})();

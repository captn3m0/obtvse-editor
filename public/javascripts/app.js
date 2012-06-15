(function(){

  var config_gist_id = 2936166;
  var posts_per_page = 3;
  //Fork https://gist.github.com/2936166 to use as a template
  // initialize the application
  var app = Sammy('#container', function() {
    // include a plugin
    this.use('Mustache');

    // define a 'route'
    this.get('#/', function() {
      //We'll call the same function thrice
      //and add the post each time.
      // load some data
      this.load('posts.json')
          // render a template
          .renderEach('post.mustache')
          // swap the DOM with the new content
          .swap();
    });
  });

  //Fetch the config details from main gist
  var configUrl = 'https://api.github.com/gists/'+config_gist_id;
  var configUrl = 'gist.json';//development purposes

  //Fetch the config from github and start the app
  $.getJSON(configUrl,function(data){
    var config=JSON.parse(data.files['config.json'].content);
    $('header').html(Mustache.to_html($('header').html(),config));
    app.run('#/');
  })
})()

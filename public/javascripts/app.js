(function(){
  var config_gist_id = 2936166;
  //Fork https://gist.github.com/2936166 to use as a template
  // initialize the application
  var app = Sammy('#container', function() {
    // include a plugin
    this.use('Jade');

    // define a 'route'
    this.get('#/', function() {
      // load some data
      this.load('posts.json')
          // render a template
          .renderEach('post.mustache')
          // swap the DOM with the new content
          .swap();
    });
  });

  //Fetch the config details from main gist
  $.getJSONP('https://api.github.com/gists/'+config_gist_id,function(){
    app.run('#/');
  })
})()

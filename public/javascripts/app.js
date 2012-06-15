(function(){
  Sammy.Mustache = Mustache;
  var config_gist_id = 2936166;
  //Fork https://gist.github.com/2936166 to use as a template
  // initialize the application
  var app = Sammy('#container', function() {
    // include a plugin
    //this.use('Mustache');

    // define a 'route'
/*    this.get('#/', function() {
      // load some data
      this.load('posts.json')
          // render a template
          .renderEach('post.mustache')
          // swap the DOM with the new content
          .swap();
    });
*/
  });
  console.log('Sending Request');
  //Fetch the config details from main gist
  var configUrl = 'https://api.github.com/gists/'+config_gist_id;
  var configUrl = 'gist.json';
  $.getJSON(configUrl,function(data){
    console.log(data.files['config.json'].content);
    var config=JSON.parse(data.files['config.json'].content);
    console.log(config);
    $('header').html(Mustache.to_html($('header').html(),config));
    app.run('#/');
  })
})()

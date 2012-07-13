// Filename: main.js

// Require.js allows us to configure mappings to paths
// as demonstrated below:
require.config({
  paths: {
    jquery: 'libs/jquery-min',
    text: 'libs/require/text',
    simrou:'libs/simrou',
    showdown:'libs/showdown',
    storage:'storage',
    github:'libs/github',
    jade:'libs/jade',
    underscore:'libs/underscore',
    base64:'libs/base64',
    yaml:'libs/yaml2'
  }
});

require(['app','github'], function(App,Github){
  App.start('/');
});

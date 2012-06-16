module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dev: {
        src: [
          'public/javascripts/sammy.storage.js',//Sammy.Storage plugin
          'public/javascripts/jade.js',//Jade minified lib
          'public/javascripts/sammy.jade.js',//Sammy.Jade plugin (needs jade)
          'public/javascripts/showdown.js',//This is Github Flavored Markdown
          'public/javascripts/app.js'//Main core application
        ],
        dest: 'public/javascripts/build.js'
      }
    },
    min:{
      js:{
        src:'public/javascripts/build.js',
        dest:'public/javascripts/app.min.js',
        separator: ';'
      }
    },
    watch:{
      files:'<config:concat.dev.src>',
      tasks:'concat'
    }
  });
  grunt.registerTask('default', 'watch');
  grunt.registerTask('production', 'concat min');
};

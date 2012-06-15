module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dev: {
        src: [
		      'public/javascripts/mustache.js',
          'public/javascripts/sammy.mustache.js',
          'public/javascripts/showdown.js',
          'public/javascripts/app.js'
		    ],
          dest: 'public/javascripts/build.js'
        }
    },
    min:{
	    js:{
	      src:['public/javascripts/build.js'],
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

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-jade');
  grunt.initConfig({
    concat: {
      dev: {
        src: [
          'public/javascripts/jade.min.js',
		      'public/javascripts/mustache.min.js',
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
    jade:{
      dev:{
        src:['views/*.jade'],
        dest:'views/build/',
        options: {
          compileDebug: false
        },
        wrapper: {
          amd: true
        }
      }
    },
	  watch:{
	    files:['<config:concat.dev.src>','<config:jade.dev.src>'],
  	  tasks:'concat jade'
	  }
  });
  grunt.registerTask('default', 'watch');
  grunt.registerTask('production', 'concat min');
};

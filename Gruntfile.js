module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    project: {
      css: 'css',
      js: 'js',
      tag: "/*x ----->>>> Curso de Capacitacion OEP <------ */"
    },

    concat: {
      options: {
          stripBanners: false
      },

      app: {
          src: [
              "js/loader.js",
              "js/index.js",
              "js/hola.js",
          ],
          dest: 'js/oep.js'
      }
    },

    uglify: {
      options: { banner: "<%= project.tag %>" },

      app: {
        files: { 
          'js/oep.min.js': ['js/oep.js'] 
        }
      }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  
  // grunt.registerTask('default', ['concat:app']);
  grunt.registerTask('build', ['concat:app', 'uglify:app']);

};



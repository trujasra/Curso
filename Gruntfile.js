module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    project: {
      css: 'css',
      js: 'js'
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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  
  // grunt.registerTask('default', ['concat:app']);
  grunt.registerTask('concatenar', ['concat:app']);

};



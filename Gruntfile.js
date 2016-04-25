module.exports = function(grunt){
  'use strict';
  grunt.initConfig({
      jshint: {
        debug: ['Gruntfile.js', 'app.js'],
      },
      watch: {
        lint: {
          files: ['Gruntfile.js', 'app.js'],
          tasks: ['lint'],
        },
        test: {
          files: ['test/**/*.js'],
          tasks: ['test']
        }
      },
    });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('lint', ['jshint']);
};


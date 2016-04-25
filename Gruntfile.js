module.exports = function(grunt){
  'use strict';
  grunt.initConfig({
      jshint: {
        debug: ['Gruntfile.js', 'app.js'],
      },

      clean: {
        build: 'output'
      },

      copy: {
        images: {
          expand: true,
          cwd: 'input',
          src: '**/*.jpg',
          dest: 'output/'
        }
      },

      imagemin: {
        release: {
          files: [{
            expand: true,
            src: 'input/**/*.jpg'
          }],
          options: {
            progressive: true
          }
        }
      },

      image_resize: {
        resize: {
          options: {
            width: 800,
            height: 800,
          },
        src: 'output/*.jpg',
        dest: 'cropped/'
        }
      },

      watch: {
        lint: {
          files: ['input/**/*.jpg'],
          tasks: ['default'],
        },
        test: {
          files: ['test/**/*.js'],
          tasks: ['test']
        }
      },
    });
  
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-image-resize');
  grunt.registerTask('default', ['jshint', 'copy', 'imagemin', 'image_resize:resize']);
};


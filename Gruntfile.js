'use strict';

module.exports = function(grunt) {
  grunt.initConfig({

    react: {
      app: {
        files: [
          {
            cwd: 'src',
            dest:'build',
            src: ['**/*.jsx'],
            ext: '.js',
            expand: true
          }
        ]
      }
    },

    traceur: {
      app: {
        files: [
          {
            dest: '.',
            src: 'build/**/*.js',
            expand: true
          }
        ]
      }
    },

    browserify: {
      app: {
        files: [
          {
            dest: 'build/bundle.js',
            src: 'build/**/*.js'
          }
        ]
      }
    },

    copy: {
      bundle: {
        files: {'site/js/main.js': 'build/bundle.js'}
      },
      static: {
        files: [{
            expand: true,
            cwd: 'static',
            src: ['**/*'],
            dest: 'site/'
          }
        ]
      },
    },

    watch: {
      scripts: {
        files: 'src/**/*',
        tasks: 'default'
      },
      css: {
        files: 'src/**/*.less',
        tasks: 'css'
      }
    },

    autoprefixer: {
      css: {
        src: 'site/css/styles.css',
        dest: 'site/css/styles.css'
      }
    },

    clean: {
      app: ['tmp/**/*', 'site/**/*', 'build/**/*']
    },

    'gh-pages': {
      options: {
        base: 'site'
      },
      src: ['**']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-traceur');
  grunt.loadNpmTasks('grunt-react');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean',
    'react',
    'traceur',
    'browserify',
    'copy'
  ]);

};

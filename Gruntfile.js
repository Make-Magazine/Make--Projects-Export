module.exports = function(grunt) {

  var STATIC_PATH = 'projects/',
      BUILD_PATH = 'pretty/';

  module.exports = function(grunt) {
      var config = {
          tree: {
              js: {
                  options: {
                      format: true,
                      md5: 8,
                      type: ['js'],
                      ext: {
                          level: 1
                      }
                  },
                  files: [
                      {
                          src: [STATIC_PATH],
                          dest: BUILD_PATH + 'data/js.json'
                      }
                  ]
              },
              css: {
                  options: {
                      format: true,
                      md5: 8,
                      type: ['css'],
                      ext: {
                          level: 1
                      }
                  },
                  files: [
                      {
                          src: [STATIC_PATH],
                          dest: BUILD_PATH + 'data/css.json'
                      }
                  ]
              }
          },
          genStaticConfig: {
              build: []
          }
      };

      // Project Configuration
      grunt.initConfig(config);

      // load grunt tree module.
      grunt.loadNpmTasks('grunt-tree');

      grunt.registerMultiTask('genStaticConfig', 'generate static config files with js.json and css.json', function() {
          grunt.config('tree.css.options.md5', false);
          var files = grunt.config('tree.css.files');
          files[0].dest = 'data/css.json';
          grunt.config('tree.css.files', files);

          grunt.config('tree.js.options.md5', false);
          files = grunt.config('tree.js.files');
          files[0].dest = 'data/js.json';
          grunt.config('tree.js.files', files);
      });

      // for production
      grunt.registerTask('static', ['tree']);
      // for development
      grunt.registerTask('buildstatic', ['genStaticConfig', 'tree']);
  };

};
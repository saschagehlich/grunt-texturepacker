/*
 * grunt-texturepacker
 * https://github.com/saschagehlich/grunt-texturepacker
 *
 * Copyright (c) 2014 Sascha Gehlich
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    texturepacker: {
      assets: {
        src: ["test/fixtures/**/*.png"],
        options: {
          scale: 2,
          scaleMode: 'fast',
          disableRotation: true,
          padding: 0,
          trimMode: '',
          algorithm: 'Basic',
          basicSortBy: 'Width',
          basicOrder: 'Ascending',
          output: {
            sheet: {
              file: 'tmp/assets.png',
              format: 'png'
            },
            data: {
              file: 'tmp/assets.json',
              format: 'json'
            }
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'texturepacker', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

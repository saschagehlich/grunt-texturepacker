/*
 * grunt-texturepacker
 * https://github.com/saschagehlich/grunt-texturepacker
 *
 * Copyright (c) 2014 Sascha Gehlich
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('underscore.string');
var spawn = require('child_process').spawn;

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('texturepacker', 'A TexturePacker wrapper for Grunt', function() {
    var done = this.async();
    var options = this.options({
      executable: 'TexturePacker'
    });
    var args = [];

    function addArgument(argument, value) {
      if (typeof value !== 'undefined') {
        args.push(argument);
        if (value === '') value = 'None';
        if (typeof value !== 'boolean') {
          args.push(value);
        }
      }
    }

    // Concatenate all file groups
    var files = [];
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      })

      files = files.concat(src);
    });

    // Sheet options
    args.push('--sheet', options.output.sheet.file);
    args.push('--texture-format', options.output.sheet.format);

    // Data options
    args.push('--data', options.output.data.file);
    args.push('--format', options.output.data.format);

    var argument, value;
    var skipOptions = ['output', 'executable'];
    for (var key in options) {
      if (skipOptions.indexOf(key) !== -1) continue;

      argument = '--' + _.dasherize(key);
      value = options[key];

      addArgument(argument, value);
    }

    args = args.concat(files);

    // Spawn the process
    var p = spawn(options.executable, args);
    p.stdout.on('data', function (data) {
      grunt.log.write(data.toString());
    });
    p.stderr.on('data', function (data) {
      grunt.log.error(data);
    });
    p.on('close', function (code) {
      if (code !== 0) {
        grunt.fail.warn('TexturePacker exited with code ' + code + '.');
      }
      done();
    });
  });

};

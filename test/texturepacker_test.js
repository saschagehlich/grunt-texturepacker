'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.texturepacker = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  assets: function(test) {
    test.expect(2);

    test.ok(grunt.file.exists('tmp/assets.json'));
    test.ok(grunt.file.exists('tmp/assets.png'));

    test.done();
  }
};

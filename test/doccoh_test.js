"use strict";
var grunt = require('grunt');
var rr = require("rimraf");

module.exports.doccoh = {
  tearDown: function (callback) {
     rr('docs', function(){});
     callback();
  },

  tests: function(test) {
     var css = grunt.file.read("docs/doccoh.css");
     var html = grunt.file.read("docs/doccoh.html");

     test.expect(2);
     test.ok(css.length > 0, "Should create CSS.");
     test.ok(html.length > 0, "Should create HTML.");
     test.done();
  },

  testCustomCss: function(test) {
     var css = grunt.file.read("docs/custom.css");
     var html = grunt.file.read("docs/doccoh_test.html");

     test.expect(2);
     test.ok(css.length > 0, "Should use custom.css");
     test.ok(html.length > 0, "Should create HTML.");
     test.done();
  }
};

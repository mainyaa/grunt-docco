// grunt-doccoh
// https://github.com/mainyaa/grunt-doccoh
//
// forked by: Copyright (c) 2013 mainyaa
// origin: Copyright (c) 2012 David Souther
// Licensed under the MIT license.

"use strict";
var doccoh = require('doccoh');

module.exports = function(grunt) {
  grunt.registerMultiTask('doccoh', 'Doccoh processor.', function() {
    // Either set the destination in the files block, or (prefferred) in { options: output }
    this.options.output = this.options.output || (this.file && this.file.dest);
    doccoh.document(this.options({ args: this.filesSrc }), this.async());
  });
};

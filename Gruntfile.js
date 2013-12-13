module.exports = function(grunt) {

  grunt.initConfig({
    clean: { tests: ["docs"] },

    jshint: {
      grunt: ['Gruntfile.js'],
      tasks: ['tasks/doccoh.js'],
      tests: ['test/*.js'],
      options: {
        node: true
      }
    },

    doccoh: {
      tests: {
        src: ['test/**/*.js', 'test/**/*.coffee'],
        dest: "docs/"
      },
      'custom-css-test': {
        src: ['test/**/*.js'],
        dest: 'docs/',
        options: {
            css: 'test/fixtures/custom.css',
            output: 'docs/'
        }
      }
    },

    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('test', ['clean:tests', 'doccoh', 'nodeunit:tests']);
  grunt.registerTask('lint', ['jshint:grunt', 'jshint:tasks', 'jshint:tests']);
  grunt.registerTask('default', ['lint', 'doccoh']);
};

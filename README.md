# grunt-doccoh

Grunt Doccoh plugin.

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-doccoh --save-dev`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-doccoh');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation

Add the task config to the grunt initConfig block.

```
doccoh: {
  debug: {
    src: ['test/**/*.js'],
    options: {
      output: 'docs/'
    }
  }
}

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
0.1.0: Early release, depended on python's pygments.

## License
forked by: Copyright (c) 2013 mainyaa
origin: Copyright (c) 2012 David Souther
Licensed under the MIT license.

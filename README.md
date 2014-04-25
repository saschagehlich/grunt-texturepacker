# grunt-texturepacker

> A TexturePacker wrapper for Grunt

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-texturepacker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-texturepacker');
```

## The "texturepacker" task

### Overview
In your project's Gruntfile, add a section named `texturepacker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  texturepacker: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.executable
Type: `String`
Default: `TexturePacker`

The path to the TexturePacker executable.

#### options.src
Type: `String|Array`

A string or array containing the files that should be used as an input.

### options.output.sheet.file
Type: `String`

The destination filename for the sheet file.

### options.output.sheet.format
Type: `String`

The format for the sheet file. See `TexturePacker --help` for available formats.

### options.output.data.file
Type: `String`

The destination filename for the data file.

### options.output.sheet.format
Type: `String`

The format for the data file. See `TexturePacker --help` for available formats.

### All other TexturePacker CLI options

All other options will be converted to CLI options, e.g. `{ basicSortBy: "Width" }` will be converted to `--basic-sort-by Width`.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

#### 0.0.1 (Apr 25 2014)

* Initial release

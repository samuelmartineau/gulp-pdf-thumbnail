# gulp-pdf-thumbnail

[![NPM version](https://img.shields.io/npm/v/gulp-pdf-thumbnail.svg?style=flat)](https://www.npmjs.com/package/gulp-pdf-thumbnail)
[![Build Status](https://img.shields.io/travis/samuelmartineau/gulp-pdf-thumbnail.svg?style=flat)](https://travis-ci.org/samuelmartineau/gulp-pdf-thumbnail)
[![NPM](https://nodei.co/npm/gulp-pdf-thumbnail.png?downloads=true&stars=true)](https://nodei.co/npm/gulp-pdf-thumbnail/)

## What this?

> Gulp plugin that generate PNG thumbnail from PDF files.

## Getting started

First download and install GraphicsMagick or ImageMagick. In Mac OS X, you can simply use Homebrew and do:

```
brew install imagemagick
brew install graphicsmagick
```

## Install

```
$ npm install --save-dev gulp-pdf-thumbnail
```

## Usage

```js
var gulp = require('gulp');
var pdfThumbnail = require('gulp-pdf-thumbnail');

gulp.task('default', function () {
	return gulp.src('src/file.pdf')
		.pipe(pdfThumbnail())
		.pipe(gulp.dest('dist'));
});
```

## License

MIT © [Samuel Martineau](http://samuelmartineau.github.io)

# gulp-pdf-thumbnail

[![NPM version](https://img.shields.io/npm/v/gulp-pdf-thumbnail.svg?style=flat)](https://www.npmjs.com/package/gulp-pdf-thumbnail)
[![Build Status](https://travis-ci.org/samuelmartineau/gulp-pdf-thumbnail.svg?branch=master)](https://travis-ci.org/samuelmartineau/gulp-pdf-thumbnail)
[![Coverage Status](https://coveralls.io/repos/samuelmartineau/gulp-pdf-thumbnail/badge.svg?branch=master&service=github)](https://coveralls.io/github/samuelmartineau/gulp-pdf-thumbnail?branch=master)
[![Dependency Status](https://david-dm.org/samuelmartineau/gulp-pdf-thumbnail.svg)](https://david-dm.org/samuelmartineau/gulp-pdf-thumbnail)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

[![NPM](https://nodei.co/npm/gulp-pdf-thumbnail.png?downloads=true&stars=true)](https://nodei.co/npm/gulp-pdf-thumbnail/)

## What this?

> Gulp plugin that generate PNG thumbnail from PDF files.

## Getting started

First download and install GraphicsMagick or ImageMagick.

[imagemagick!] (http://www.imagemagick.org/script/binary-releases.php)
[graphicsmagick!] (http://www.graphicsmagick.org/)

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

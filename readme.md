# gulp-pdf-thumbnail [![Build Status](https://travis-ci.org/samuelmartineau/gulp-pdf-thumbnail.svg?branch=master)](https://travis-ci.org/samuelmartineau/gulp-pdf-thumbnail)

> Gulp plugin that generate PNG thumbnail from PDF files.

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

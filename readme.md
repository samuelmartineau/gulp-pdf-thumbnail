# gulp-pdf-thumbnail 

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

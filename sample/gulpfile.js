const gulp = require('gulp');
const pdfThumbnail = require('gulp-pdf-thumbnail');

gulp.task('default', () => {
	return gulp.src('../tests/NodeJSPresentation.pdf')
		.pipe(pdfThumbnail())
		.pipe(gulp.dest(''));
});

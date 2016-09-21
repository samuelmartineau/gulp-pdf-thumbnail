'use strict';
const exec = require('child_process').exec;
const path = require('path');
const gutil = require('gulp-util');
const through = require('through2');
const gm = require('gm').subClass({
	imageMagick: true
});
const replaceExt = require('replace-ext');

function handleObjectStream(file, enc, cb) {
	if (file.isNull()) {
		gutil.log('Be carefull, you passed a file without contents');
		cb(null, file);
		return;
	}

	if (file.isStream()) {
		cb(new gutil.PluginError('gulp-pdf-thumbnail-generator', 'Streaming not supported'));
		return;
	}

	if (path.extname(file.path) !== '.pdf') {
		cb(new gutil.PluginError('gulp-pdf-thumbnail-generator', path.extname(file.path) + ' extention is not supported'));
		return;
	}

	const that = this;
	// select the first page
	gm(file.path + '[0]')
		.out('+adjoin')
		.trim()
		.toBuffer('PNG', (err, buffer) => {
			if (err) {
				cb(new gutil.PluginError('gulp-pdf-thumbnail-generator', err));
				return;
			}

			file.contents = buffer;
			file.path = replaceExt(file.path, '.png');
			that.push(file);
			cb();
		});
}

module.exports = () => {
	// Check if imageMagick is installed
	exec('convert -version', (error, stdout) => {
		if (error || !stdout || stdout.toLowerCase().indexOf('imagemagick') === -1) {
			new gutil.PluginError('gulp-pdf-thumbnail-generator', 'ImageMagick not installed'); // eslint-disable-line no-new
		}
	});

	return through.obj(handleObjectStream);
};

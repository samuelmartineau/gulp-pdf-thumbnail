'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var gm = require('gm').subClass({imageMagick: true});
var path = require('path');
var replaceExt = require('replace-ext');
var exec = require('child_process').exec;

module.exports = function (options) {

	return through.obj(function (file, enc, cb) {

		// Check if imageMagick is installed
		exec('convert -version', function(error, stdout, stderr) {
			if(error || !stdout || stdout.toLowerCase().indexOf('imagemagick') == 0){
				cb(new gutil.PluginError('gulp-pdf-thumbnail-generator', 'ImageMagick not installed'));
				return;
			}
		});

		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-pdf-thumbnail-generator', 'Streaming not supported'));
			return;
		}

		if (path.extname(file.path) != '.pdf') {
			cb(new gutil.PluginError('gulp-pdf-thumbnail-generator', path.extname(file.path) + ' extention is not supported'));
			return;
		}

		try {

			var that = this;
			// select the first page
			gm(file.path + '[0]')
				.out('+adjoin')
				.trim()
				.toBuffer('PNG', function (err, buffer) {
					if (err) return handle(err);

					file.contents = buffer;
					file.path = replaceExt(file.path, '.png');
					that.push(file);
					cb();
				});

		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-pdf-thumbnail-generator', err));
		}

	});
};

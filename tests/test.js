var test = require('tape'),

	File = require('vinyl'),
	path = require('path'),
	read = require('vinyl-file').read,
	pdfThumbnail = require("../");

test('Plugin test', function(t) {
	t.plan(2);

	read(path.join(__dirname, 'NodeJSPresentation.pdf'), function(err, file) {
		var stream = pdfThumbnail();

		stream.on('data', function(data) {
			t.true(path.extname(data.path) === '.png', 'should create a png file from a pdf');
		});
		stream.end(file);
	});

	read(path.join(__dirname, 'gulp.png'), function(err, file) {
		var stream = pdfThumbnail();

		stream.on('error', function(err) {
			t.pass('should fail if the input file is not a pdf');
		});
		stream.end(file);
	});

});

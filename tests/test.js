var test = require('tape'),

	nockExec = require('nock-exec'),
	File = require('vinyl'),
	path = require('path'),
	read = require('vinyl-file').read,
	pdfThumbnail = require("../"),
	Stream = require('stream');

test('Plugin test', function(t) {
	t.plan(5);

	var stream = pdfThumbnail();
	var dummy = new File();
	stream.on('data', function(file) {
		t.true(file === dummy, 'should do nothing with the file if it hasn\'t contents');
	});
	stream.write(dummy);
	stream.end();

	var stream2 = pdfThumbnail();
	var dummy2 = new File();
	dummy2.contents = new Stream();
	stream2.on('error', function(file) {
		t.pass('should fail if contents is a Stream');
	});
	stream2.write(dummy2);
	stream2.end();

	read(path.join(__dirname, 'NodeJSPresentation.pdf'), function(err, file) {
		var stream = pdfThumbnail();

		stream.on('data', function(file) {
			t.true(path.extname(file.path) === '.png', 'should create a png file from a pdf');
		});
		stream.end(file);
	});

	read(path.join(__dirname, 'gulp.png'), function(err, file) {
		var stream = pdfThumbnail();

		stream.on('error', function(err) {
			t.pass('should fail if the input file is not a pdf', err);
		});
		stream.end(file);
	});

	var stream3 = pdfThumbnail();
	nockExec('convert -version').err(' zsh: command not found: convert').reply(0, 'zsh: command not found: convert');
	try {
		throw stream3.on();
	} catch (e) {
		t.pass('should fail imagemagick is not installed');
	}

});

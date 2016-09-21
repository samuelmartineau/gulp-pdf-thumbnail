const Stream = require('stream');
const path = require('path');
const test = require('tape');
const nockExec = require('nock-exec');
const File = require('vinyl');
const read = require('vinyl-file').read;
const pdfThumbnail = require('../');

test('Plugin test', t => {
	t.plan(5);

	const stream = pdfThumbnail();
	const dummy = new File();

	stream.on('data', file => {
		t.true(file === dummy, 'should do nothing with the file if it hasn\'t contents');
	});
	stream.write(dummy);
	stream.end();

	const stream2 = pdfThumbnail();
	const dummy2 = new File();
	dummy2.contents = new Stream();
	stream2.on('error', () => {
		t.pass('should fail if contents is a Stream');
	});
	stream2.write(dummy2);
	stream2.end();

	read(path.join(__dirname, 'NodeJSPresentation.pdf'))
		.then(file => {
			const stream = pdfThumbnail();

			stream.on('data', file => {
				t.true(path.extname(file.path) === '.png', 'should create a png file from a pdf');
			});
			stream.end(file);
		});

	read(path.join(__dirname, 'gulp.png'))
		.then(file => {
			const stream = pdfThumbnail();

			stream.on('error', err => {
				t.pass('should fail if the input file is not a pdf', err);
			});
			stream.end(file);
		});

	const stream3 = pdfThumbnail();
	nockExec('convert -version').err(' zsh: command not found: convert').reply(0, 'zsh: command not found: convert');
	try {
		throw stream3.on();
	} catch (err) {
		t.pass('should fail imagemagick is not installed');
	}
});

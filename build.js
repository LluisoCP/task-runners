let fs = require('fs');
let browserify = require('browserify');
let bs = browserify();
let target = './src/js/testUrl.js';
let main = './main.js';
fs.watch(target, function(e, fname) {
	// bs.add(main).bundle().pipe(fs.createWriteStream('./dist/js/build.js'))
	bs.add(main).bundle((err, bf) => {
		if (err) {
			console.log(err)
		} else {
			fs.writeFile('./dist/js/build.js', bf, err => console.log(err))
		}
	})
	console.log(`${target} changed. Saved to ${main}`);
	bs = browserify();
})
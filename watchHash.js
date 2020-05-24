let fs 			= require('fs');
let browserify 	= require('browserify');
let hashmark 	= require('hashmark');
let file1 		= './src/js/testUrl.js';
let file2 		= './src/js/testJquery.js';
let main 		= './main.js';
fs.watch(file1, function(e, fname) {
	let bs = browserify();
	bs.add(main).bundle((err, bf) => {
		if (err) {
			console.log(err)
		} else {
			let add1 	= fs.createReadStream(file1);
			let add2 	= fs.createReadStream(file2);
			hashmark(
				// [add1, add2, bf],
				[add1, add2],
				{
					length		: 4,
					file 		: './dist/js/script.#.js',
					"asset-map"	: 'hashedfiles.json'
				},
				(err, hash) => {
					if (err) throw err;
					console.log(`File saved with hash ${hash}.`);
				}
			)
		}
	})
})
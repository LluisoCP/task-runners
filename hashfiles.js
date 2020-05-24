let fs 			= require('fs');
let browserify 	= require('browserify');
let hashmark 	= require('hashmark');
let file1 		= './src/js/testUrl.js';
let file2 		= './src/js/testJquery.js';
let main 		= './main.js';
let add1 		= fs.createReadStream(file1);
let add2 		= fs.createReadStream(file2);
// hashmark([file1, file2], {
// hashmark([add1, add2], {
// hashmark(add1, { length: 8, digest: 'md5', pattern: 'script.{hash}.js', cwd: './', "asset-map": 'hashed.json'}, function (err, map) {
//     console.log(map);
// });
// hashmark([add1, add2], {
// 		length		: 4,
// 		// file 		: 'dist/js/script.#.js',
// 		cwd			: './',
// 		pattern		: 'dist/js/script.{hash}.js'
// 	}, function(err, hash) {
// 	if (err) {
// 		console.log(err.name, err.message, err.lineNumber)
// 	} else {
// 		console.log(hash);
// 	}
// })

let bs = browserify();
bs.add(main).bundle((err, bf) => {
	if (err) {
		console.log(err)
	} else {
		
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

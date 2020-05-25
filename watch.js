let fs 						= require('fs');
let path 					= require('path');
let browserify 		= require('browserify');
let hashmark 			= require('hashmark');
let file1 				= 'src/js/testUrl.js';
let file2 				= 'src/js/testJquery.js';
let main 					= 'main.js';
let destination 	= 'dist/js/someJS.js';
let assetMapPath	= 'testAssets.json';
let map 					= {};
map[main] = destination;
fs.watch(file1, function(e, fname) {
	let bs = browserify();
	bs.add(main).bundle((err, bf) => {
		if (err) {
			console.log(err)
		} else {
			let dest 	= fs.createWriteStream(destination);
			let add1 	= fs.createReadStream(file1);
			let add2 	= fs.createReadStream(file2);
			add1.pipe(dest);
			dest.write(bf);
			add2.pipe(dest);
			map[path.relative(process.cwd(), main)] = path.relative(process.cwd(), destination);
			if (fs.existsSync(assetMapPath)) {
				var assetMap = JSON.parse(fs.readFileSync(assetMapPath));
			  Object.keys(assetMap).reduce(function (map, key) {
			      map[key] = map[key] || assetMap[key];
			      return map;
				  }, map);
			}
      fs.writeFileSync(assetMapPath, JSON.stringify(map, null, 2).replace(/\\\\/g,'/'));
		}
	})
	console.log(`${file1} changed. Saved to ${destination}`);
})
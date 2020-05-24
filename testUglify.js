let fs 		= require('fs');
let uglify 	= require('uglify-js');

let sources 	= ['./src/js/testUgli/base.js','./src/js/testUgli/code.js'];
let destination = './dist/js/code.min.js';

let options = {
	mangle: {
		toplevel: true
	}
}
// let code1 = fs.readFileSync(sources[0], "utf8");
// console.log(typeof code1);
// let result1 = uglify.minify({
//     "test.js": code1
// }, options);
// let result2 = uglify.minify({
//     "file.js": "console.log(add(1 + 2, 3 + 4));"
// }, options);
// console.log(result1);
// console.log(result2.code);

// console.log(sources[0]);
// console.log(sources[1]);
fs.writeFileSync(destination, uglify.minify({
    "file1.js": fs.readFileSync(sources[0], "utf8"),
    "file2.js": fs.readFileSync(sources[1], "utf8")
}, options).code, "utf8");
// let result =  uglify.minify({
//     "file1.js": fs.readFileSync(sources[0], "utf8"),
//     "file2.js": fs.readFileSync(sources[1], "utf8")
// }, options)
// console.log(result.code);

let fs 			= require('fs');
let babel 		= require('@babel/core');
let destination = './dist/js/babel/code.babel.js';
let code 		= fs.readFileSync('./src/js/testBabel/base.js');
let options 	= {
	"presets": ["@babel/preset-env"]
}
babel.transform(code, options, (err, res) => {
	fs.writeFile(destination, res.code, err => {
		if (err) throw err;
  		console.log('The file has been saved!');
	})
});
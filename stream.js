let fs = require('fs');
let stream = fs.createReadStream('data.txt');
let output = fs.createWriteStream('output.txt');
// stream.on("data", function(data) {
// 	console.log(data.toString());
// });
stream.pipe(output);
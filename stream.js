let fs = require('fs');
let data = fs.createReadStream('data.txt');
let input = fs.createReadStream('input.txt');
let output = fs.createWriteStream('output.txt');
// stream.on("data", function(data) {
// 	console.log(data.toString());
// });
// data.pipe(output);
// output.write(data.read());
// output.write(input.read());
input.pipe(output);
data.pipe(output);
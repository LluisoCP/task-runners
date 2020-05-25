let crypto 				= require('crypto');
let hash = crypto.createHash('sha256');
let data = "datalet hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});let hash = crypto.createHash('shake256', {outputLength:2});";
// console.log(hash.digest('hex'));
hash.update(data);
console.log(hash.digest('hex').slice(0,8));
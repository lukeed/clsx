const fs = require('fs');
const mkdir = require('mk-dirs');
const pretty = require('pretty-bytes');
const { minify } = require('terser');
const sizer = require('gzip-size');
const pkg = require('./package');

let data = fs.readFileSync('src/index.js', 'utf8');

mkdir('dist').then(() => {
	// Copy as is for ESM
	fs.writeFileSync(pkg.module, data);

	// Mutate exports for CJS
	data = data.replace(/export default/, 'module.exports =');
	fs.writeFileSync(pkg.main, data);

	// Minify & print gzip-size
	let { code } = minify(data, { toplevel:true });
	console.log(`> gzip size: ${pretty(sizer.sync(code))}`);

	// Write UMD bundle
	let name = pkg['umd:name'] || pkg.name;
	let UMD = `!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.${name}=t()}(this,function(){`;
	UMD += code.replace(/module.exports=/, 'return ') + '});';
	fs.writeFileSync(pkg.unpkg, UMD);
});

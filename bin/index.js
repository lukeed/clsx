// @ts-check
const fs = require('fs');
const zlib = require('zlib');
const { minify } = require('terser');
const pkg = require('../package.json');

if (!fs.existsSync('dist')) fs.mkdirSync('dist');

/**
 * @param {string} file
 * @param {string} source
 */
function write(file, source) {
	let isModule = !source.startsWith('!function');
	let result = minify(source, {
		module: isModule,
		compress: true,
	});

	fs.writeFileSync(file, result.code);
	console.log('~> "%s" (%d b)', file, zlib.gzipSync(result.code).byteLength);
}

let input = fs.readFileSync('src/index.js', 'utf8');

// copy for ESM
write(pkg.module, input);

// transform ESM -> CJS exports
write(pkg.main, input.replace('export function', 'function').replace(
	'export default clsx;',
	'module.exports = clsx;\n'
	+ 'module.exports.clsx = clsx;'
));

// transform ESM -> UMD exports
input = input.replace('export function', 'function').replace('export default clsx;', 'return clsx.clsx=clsx, clsx;');
write(pkg.unpkg, '!function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):global.clsx=factory()}(this,function(){' + input + '});');

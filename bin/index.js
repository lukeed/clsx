// @ts-check
const fs = require('fs');
const zlib = require('zlib');
const { minify } = require('terser');
const pkg = require('../package.json');

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

	if (result.code) {
		fs.writeFileSync(file, result.code);
		let size = zlib.gzipSync(result.code).byteLength;
		console.log('~> "%s" (%d b)', file, size);
	} else {
		console.error('!! "%s" ::', file, result.error);
	}
}

/**
 * @typedef Export
 * @property {Condition} import
 * @property {Condition} default
 */

/**
 * @typedef Condition
 * @property {string} types
 * @property {string} default
 */

/**
 * @param {string} file
 * @param {"." | "./lite"} entry
 */
function bundle(file, entry) {
	fs.existsSync('dist') || fs.mkdirSync('dist');

	/**
	 * @type {Export}
	 */
	let output = pkg.exports[entry];
	let input = fs.readFileSync(file, 'utf8');

	// copy for ESM file
	write(output.import.default, input);

	// transform ESM -> CJS exports
	write(output.default.default, input.replace('export function', 'function').replace(
		'export default clsx;',
		'module.exports = clsx;\n'
		+ 'module.exports.clsx = clsx;'
	));

	if (entry === '.') {
		// transform ESM -> UMD exports
		input = input.replace('export function', 'function').replace('export default clsx;', 'return clsx.clsx=clsx, clsx;');
		write(pkg.unpkg, '!function(global,factory){"object"==typeof exports&&"undefined"!=typeof module?module.exports=factory():"function"==typeof define&&define.amd?define(factory):global.clsx=factory()}(this,function(){' + input + '});');
	}
}

bundle('src/index.js', '.');
console.log('---');
bundle('src/lite.js', './lite');

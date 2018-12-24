/**
 * Ported from `classnames` for compatibility checks.
 */

const test = require('tape');
const fn = require('../dist/clsx');

test('(compat) keeps object keys with truthy values', t => {
	const out = fn({ a:true, b:false, c:0, d:null, e:undefined, f:1 });
	t.is(out, 'a f');
	t.end();
});

test('(compat) joins arrays of class names and ignore falsy values', t => {
	const out = fn('a', 0, null, undefined, true, 1, 'b');
	t.is(out, 'a 1 b');
	t.end();
});

test('(compat) supports heterogenous arguments', t => {
	t.is(fn({ a:true }, 'b', 0), 'a b');
	t.end();
});

test('(compat) should be trimmed', t => {
	t.is(fn('', 'b', {}, ''), 'b');
	t.end();
});

test('(compat) returns an empty string for an empty configuration', t => {
	t.is(fn({}), '');
	t.end();
});

test('(compat) supports an array of class names', t => {
	t.is(fn(['a', 'b']), 'a b');
	t.end();
});

test('(compat) joins array arguments with string arguments', t => {
	t.is(fn(['a', 'b'], 'c'), 'a b c');
	t.is(fn('c', ['a', 'b']), 'c a b');
	t.end();
});

test('(compat) handles multiple array arguments', t => {
	t.is(fn(['a', 'b'], ['c', 'd']), 'a b c d');
	t.end();
});

test('(compat) handles arrays that include falsy and true values', t => {
	t.is(fn(['a', 0, null, undefined, false, true, 'b']), 'a b');
	t.end();
});

test('(compat) handles arrays that include arrays', t => {
	t.is(fn(['a', ['b', 'c']]), 'a b c');
	t.end();
});

test('(compat) handles arrays that include objects', t => {
	t.is(fn(['a', { b:true, c:false }]), 'a b');
	t.end();
});

test('(compat) handles deep array recursion', t => {
	t.is(fn(['a', ['b', ['c', { d:true }]]]), 'a b c d');
	t.end();
});

test('(compat) handles arrays that are empty', t => {
	t.is(fn('a', []), 'a');
	t.end();
});

test('(compat) handles nested arrays that have empty nested arrays', t => {
	t.is(fn('a', [[]]), 'a');
	t.end();
});

test('(compat) handles all types of truthy and falsy property values as expected', t => {
	const out = fn({
		// falsy:
		null: null,
		emptyString: '',
		noNumber: NaN,
		zero: 0,
		negativeZero: -0,
		false: false,
		undefined: undefined,

		// truthy (literally anything else):
		nonEmptyString: 'foobar',
		whitespace: ' ',
		function: Object.prototype.toString,
		emptyObject: {},
		nonEmptyObject: {a: 1, b: 2},
		emptyList: [],
		nonEmptyList: [1, 2, 3],
		greaterZero: 1
	});

	t.is(out, 'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
	t.end();
});

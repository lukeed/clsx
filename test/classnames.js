/**
 * Ported from `classnames` for compatibility checks.
 */

import { test } from 'uvu';
import * as assert from 'uvu/assert';
import clsx from '../src';

test('(compat) keeps object keys with truthy values', () => {
	const out = clsx({ a:true, b:false, c:0, d:null, e:undefined, f:1 });
	assert.is(out, 'a f');
});

test('(compat) joins arrays of class names and ignore falsy values', () => {
	const out = clsx('a', 0, null, undefined, true, 1, 'b');
	assert.is(out, 'a 1 b');
});

test('(compat) supports heterogenous arguments', () => {
	assert.is(clsx({ a:true }, 'b', 0), 'a b');
});

test('(compat) should be trimmed', () => {
	assert.is(clsx('', 'b', {}, ''), 'b');
});

test('(compat) returns an empty string for an empty configuration', () => {
	assert.is(clsx({}), '');
});

test('(compat) supports an array of class names', () => {
	assert.is(clsx(['a', 'b']), 'a b');
});

test('(compat) joins array arguments with string arguments', () => {
	assert.is(clsx(['a', 'b'], 'c'), 'a b c');
	assert.is(clsx('c', ['a', 'b']), 'c a b');
});

test('(compat) handles multiple array arguments', () => {
	assert.is(clsx(['a', 'b'], ['c', 'd']), 'a b c d');
});

test('(compat) handles arrays that include falsy and true values', () => {
	assert.is(clsx(['a', 0, null, undefined, false, true, 'b']), 'a b');
});

test('(compat) handles arrays that include arrays', () => {
	assert.is(clsx(['a', ['b', 'c']]), 'a b c');
});

test('(compat) handles arrays that include objects', () => {
	assert.is(clsx(['a', { b:true, c:false }]), 'a b');
});

test('(compat) handles deep array recursion', () => {
	assert.is(clsx(['a', ['b', ['c', { d:true }]]]), 'a b c d');
});

test('(compat) handles arrays that are empty', () => {
	assert.is(clsx('a', []), 'a');
});

test('(compat) handles nested arrays that have empty nested arrays', () => {
	assert.is(clsx('a', [[]]), 'a');
});

test('(compat) handles all types of truthy and falsy property values as expected', () => {
	const out = clsx({
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

	assert.is(out, 'nonEmptyString whitespace function emptyObject nonEmptyObject emptyList nonEmptyList greaterZero');
});

test.run();

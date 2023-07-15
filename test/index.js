// @ts-check
import { test } from 'uvu';
import * as assert from 'uvu/assert';
import * as mod from '../src';

const fn = mod.default;

test('exports', () => {
	assert.type(mod.default, 'function', 'exports default function');
	assert.type(mod.clsx, 'function', 'exports named function');
	assert.is(mod.default, mod.clsx, 'exports are equal');

	assert.type(mod.default(), 'string', '~> returns string output');
	assert.type(mod.clsx(), 'string', '~> returns string output');
});

test('strings', () => {
	assert.is(fn(''), '');
	assert.is(fn('foo'), 'foo');
	assert.is(fn(true && 'foo'), 'foo');
	assert.is(fn(false && 'foo'), '');
});

test('strings (variadic)', () => {
	assert.is(fn(''), '');
	assert.is(fn('foo', 'bar'), 'foo bar');
	assert.is(fn(true && 'foo', false && 'bar', 'baz'), 'foo baz');
	assert.is(fn(false && 'foo', 'bar', 'baz', ''), 'bar baz');
});

test('numbers', () => {
	assert.is(fn(1), '1');
	assert.is(fn(12), '12');
	assert.is(fn(0.1), '0.1');
	assert.is(fn(0), '');

	assert.is(fn(Infinity), 'Infinity');
	assert.is(fn(NaN), '');
});

test('numbers (variadic)', () => {
	assert.is(fn(0, 1), '1');
	assert.is(fn(1, 2), '1 2');
});

test('objects', () => {
	assert.is(fn({}), '');
	assert.is(fn({ foo:true }), 'foo');
	assert.is(fn({ foo:true, bar:false }), 'foo');
	assert.is(fn({ foo:'hiya', bar:1 }), 'foo bar');
	assert.is(fn({ foo:1, bar:0, baz:1 }), 'foo baz');
	assert.is(fn({ '-foo':1, '--bar':1 }), '-foo --bar');
});

test('objects (variadic)', () => {
	assert.is(fn({}, {}), '');
	assert.is(fn({ foo:1 }, { bar:2 }), 'foo bar');
	assert.is(fn({ foo:1 }, null, { baz:1, bat:0 }), 'foo baz');
	assert.is(fn({ foo:1 }, {}, {}, { bar:'a' }, { baz:null, bat:Infinity }), 'foo bar bat');
});

test('arrays', () => {
	assert.is(fn([]), '');
	assert.is(fn(['foo']), 'foo');
	assert.is(fn(['foo', 'bar']), 'foo bar');
	assert.is(fn(['foo', 0 && 'bar', 1 && 'baz']), 'foo baz');
});

test('arrays (nested)', () => {
	assert.is(fn([[[]]]), '');
	assert.is(fn([[['foo']]]), 'foo');
	assert.is(fn([true, [['foo']]]), 'foo');;
	assert.is(fn(['foo', ['bar', ['', [['baz']]]]]), 'foo bar baz');
});

test('arrays (variadic)', () => {
	assert.is(fn([], []), '');
	assert.is(fn(['foo'], ['bar']), 'foo bar');
	assert.is(fn(['foo'], null, ['baz', ''], true, '', []), 'foo baz');
});

test('arrays (no `push` escape)', () => {
	assert.is(fn({ push:1 }), 'push');
	assert.is(fn({ pop:true }), 'pop');
	assert.is(fn({ push:true }), 'push');
	assert.is(fn('hello', { world:1, push:true }), 'hello world push');
});

test('functions', () => {
	const foo = () => {};
	assert.is(fn(foo, 'hello'), 'hello');
	assert.is(fn(foo, 'hello', fn), 'hello');
	assert.is(fn(foo, 'hello', [[fn], 'world']), 'hello world');
});

test.run();

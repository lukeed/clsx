import test from 'tape';
import fn from '../src';

test('clsx', t => {
	t.is(typeof fn, 'function', 'exports a function');
	t.is(typeof fn(), 'string', '~> returns string output');
	t.end();
});

test('strings', t => {
	t.is(fn(''), '');
	t.is(fn('foo'), 'foo');
	t.is(fn(true && 'foo'), 'foo');
	t.is(fn(false && 'foo'), '');
	t.end();
});

test('strings (variadic)', t => {
	t.is(fn(''), '');
	t.is(fn('foo'), 'foo');
	t.is(fn(true && 'foo'), 'foo');
	t.is(fn(false && 'foo'), '');
	t.end();
});

test('objects', t => {
	t.is(fn({}), '');
	t.is(fn({ foo:true }), 'foo');
	t.is(fn({ foo:true, bar:false }), 'foo');
	t.is(fn({ foo:'hiya', bar:1 }), 'foo bar');
	t.is(fn({ foo:1, bar:0, baz:1 }), 'foo baz');
	t.is(fn({ '-foo':1, '--bar':1 }), '-foo --bar');
	t.end();
});

test('objects (variadic)', t => {
	t.is(fn({}, {}), '');
	t.is(fn({ foo:1 }, { bar:2 }), 'foo bar');
	t.is(fn({ foo:1 }, null, { baz:1, bat:0 }), 'foo baz');
	t.is(fn({ foo:1 }, {}, {}, { bar:'a' }, { baz:null, bat:Infinity }), 'foo bar bat');
	t.end();
});

test('arrays', t => {
	t.is(fn([]), '');
	t.is(fn(['foo']), 'foo');
	t.is(fn(['foo', 'bar']), 'foo bar');
	t.is(fn(['foo', 0 && 'bar', 1 && 'baz']), 'foo baz');
	t.end();
});

test('arrays (nested)', t => {
	t.is(fn([[[]]]), '');
	t.is(fn([[['foo']]]), 'foo');
	t.is(fn([true, [['foo']]]), 'foo');;
	t.is(fn(['foo', ['bar', ['', [['baz']]]]]), 'foo bar baz');
	t.end();
});

test('arrays (variadic)', t => {
	t.is(fn([], []), '');
	t.is(fn(['foo'], ['bar']), 'foo bar');
	t.is(fn(['foo'], null, ['baz', ''], true, '', []), 'foo baz');
	t.end();
});

test('arrays (no `push` escape)', t => {
	t.is(fn({ push:1 }), 'push');
	t.is(fn({ pop:true }), 'pop');
	t.is(fn({ push:true }), 'push');
	t.is(fn('hello', { world:1, push:true }), 'hello world push');
	t.end();
});

test('functions', t => {
	const foo = () => {};
	t.is(fn(foo, 'hello'), 'hello');
	t.is(fn(foo, 'hello', fn), 'hello');
	t.is(fn(foo, 'hello', [[fn], 'world']), 'hello world');
	t.end();
});

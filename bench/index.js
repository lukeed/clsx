const { Suite } = require('benchmark');
const classnames = require('classnames');
const classcat = require('classcat');
const clsx = require('../dist/clsx');
const old = require('clsx');
const lite = require('../dist/lite');

function bench(name, ...args) {
	console.log(`\n# ${name}`);
	new Suite()
		.add('classcat ≠  ', () => classcat.apply(classcat, [args]))
		.add('classnames  ', () => classnames.apply(classnames, args))
		.add('clsx (prev) ', () => old.apply(old, args))
		.add('clsx        ', () => clsx.apply(clsx, args))
		.add('clsx (lite) ', () => lite.apply(lite, args))
		.on('cycle', e => console.log('  ' + e.target))
		.run();
}

bench(
	'Strings',
	'foo', '', 'bar', 'baz', 'bax', 'bux'
);

bench(
	'Objects',
	{ foo:true, bar:true, bax:true, bux:false },
	{ baz:true, bax:false, bux:true }
);

bench(
	'Arrays',
	['foo', 'bar'],
	['baz', 'bax', 'bux']
);

bench(
	'Nested Arrays',
	['foo', ['bar']],
	['baz', ['bax', ['bux']]]
);

bench(
	'Nested Arrays w/ Objects',
	['foo', { bar:true, bax:true, bux:false }],
	['bax', { bax:false, bux:true }]
);

bench(
	'Mixed',
	'foo', 'bar',
	{ bax:true, bux:false },
	['baz', { bax:false, bux:true }]
);

bench(
	'Mixed (Bad Data)',
	'foo', 'bar',
	undefined, null, NaN,
	() => {},
	{ bax:true, bux:false, 123:true },
	['baz', { bax:false, bux:true, abc:null }, {}]
);

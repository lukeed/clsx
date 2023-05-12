function toVal(mix) {
	if (mix === null || mix === undefined) {
		return '';
	}

	if (typeof mix === 'string' || typeof mix === 'number') {
		return mix;
	}

	if (Array.isArray(mix)) {
		let str = '';
		for (let i = 0; i < mix.length; i++) {
			const val = toVal(mix[i]);
			if (val) {
				str && (str += ' ');
				str += val;
			}
		}
		return str;
	}

	if (typeof mix === 'object') {
		let str = '';
		for (const key in mix) {
			if (mix[key]) {
				str && (str += ' ');
				str += key;
			}
		}
		return str;
	}

	return '';
}

export function clsx(...args) {
	let str = '';
	for (let i = 0; i < args.length; i++) {
		const val = toVal(args[i]);
		if (val) {
			str && (str += ' ');
			str += val;
		}
	}
	return str;
}

export default clsx;

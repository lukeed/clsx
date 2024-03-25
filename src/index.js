function toVal(mix, key = '') {
	var k,
		y,
		str = '';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += key.length ? key + ':' + mix : mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			var len = mix.length;
			for (k = 0; k < len; k++) {
				if (mix[k]) {
					if ((y = toVal(mix[k], key))) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (y in mix) {
				if (mix[y]) {
					if (typeof mix[y] === 'object' && typeof mix[y] !== 'function') {
						str += toVal(mix[y], key.length ? key + ':' + y : y);
					} else {
						str && (str += ' ');
						str += y;
					}
				}
			}
		}
	}

	return str;
}

export function clsx() {
	var i = 0,
		tmp,
		x,
		str = '',
		len = arguments.length;
	for (; i < len; i++) {
		if ((tmp = arguments[i])) {
			if ((x = toVal(tmp))) {
				str && (str += ' ');
				str += x;
			}
		}
	}
	return str;
}

export default clsx;

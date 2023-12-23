function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (typeof mix[k] === 'function') {
					if (mix[k]()) {
						str && (str += ' ');
						str += k;
					}
				} else if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	} else if (typeof mix === 'function') {
		str += mix()
	}

	return str;
}

export function clsx() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}

export default clsx;

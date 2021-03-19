function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		return mix;
	}
	
	if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (y=0; y < mix.length; y++) {
				if (mix[y]) {
					if (k = toVal(mix[y])) {
						str && (str += ' ');
						str += k;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

export default function () {
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

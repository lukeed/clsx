function toVal(mix) {
	var k, y, str='';
	if (mix) {
		if (typeof mix === 'object') {
			for (k in mix) {
				if (mix[k] && (y = toVal(!!mix.push ? mix[k] : k))) {
					str && (str += ' ');
					str += y;
				}
			}
		} else if (typeof mix !== 'boolean') {
			str && (str += ' ');
			str += mix;
		}
	}
	return str;
}

export default function () {
	var i=0, x, str='';
	while (i < arguments.length) {
		if (x = toVal(arguments[i++])) {
			str && (str += ' ');
			str += x
		}
	}
	return str;
}

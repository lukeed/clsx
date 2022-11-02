function toVal(mix, sep) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k], sep)) {
						str && (str += sep);
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += sep);
					str += k;
				}
			}
		}
	}

	return str;
}

function concatArgs(args, initStr, sep) {
	var i=0, tmp, x, str=initStr;
	while (i < args.length) {
		if (tmp = args[i++]) {
			if (x = toVal(tmp, sep)) {
				str && (str += sep);
				str += x
			}
		}
	}
	return str;
}

export function clsx() {
	var initStr='', sep=' ';
	return concatArgs(arguments, initStr, sep);
}

export function selx() {
	var initStr='.', sep='.';
	return concatArgs(arguments, initStr, sep);
}

export default clsx;

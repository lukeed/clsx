function toStr(mix) {
	switch (mix && typeof mix) {
		case 'number':
		case 'string':
			return '' + mix;
		case 'object':
			if (Array.isArray(mix)) {
				return digest(mix);
			}
		return Object.keys(mix)
			.filter(function(key) {
				return mix[key];
			})
			.join(' ');
		default:
			return '';
	}
}
  
function digest(arr) {
	return arr.map(toStr)
		.filter(function(str) {
			return str;
		})
	.join(' ');
}
  
export default function() {
	return digest(Array.prototype.slice.call(arguments));
}

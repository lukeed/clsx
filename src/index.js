function detect (value) {
	if (value) {
		switch (typeof value) {
			case 'string':
			case 'number':
				splice(value)
				break

			case 'object':
				if (value instanceof Array) {
					return forEach(value)
				}
				for (const key in value) {
					if (value[key]) splice(key)
				}
				break
		}
	}
}

function forEach (classes) {
	for (let index = 0; index < classes.length;) {
		detect(classes[index++])
	}
}

function splice (value) {
	V += (V && value && ' ') + value
}

function clsx () {
	V = ''
	forEach(arguments)
	return V
}

let V

export default clsx

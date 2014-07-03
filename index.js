var type = require('type');
var slice = [].slice;

module.exports = exports = extend;

function extend(root) {
	var args = slice.call(arguments, 1);
	var deep = false;
	if (typeof root === 'boolean') {
		deep = root;
		root = args.shift();
	}
	for (var i = 0, l = args.length, source; source = args[i], i < l; i++) {
		if (!source) continue;
		for (var prop in source)
			if (!deep) root[prop] = source[prop];
			else switch (type(source[prop])) {
				case 'object': extend(root[prop] = root[prop] || {}, source[prop]); break;
				case 'array': root[prop] = cloneArray(source[prop]); break;
				default: root[prop] = source[prop];
			}
	}
	return root;
}

function cloneArray(array) {
	var result = [];
	for (var i = 0, l = array.length, item; item = array[i], i < l; i++)
		result.push(type(item) === 'object' ? extend(true, {}, item) : item);
	return result;
}
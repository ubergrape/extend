var type = require('type');
var clone = require('clone');
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
		for (var prop in source) {
			if (!deep || !source[prop]) root[prop] = source[prop];
			else if (type(root[prop]) === 'object' && type(source[prop]) === 'object')
				root[prop] = extend(true, root[prop], clone(source[prop]));
			else root[prop] = clone(source[prop]);
		}
	}
	return root;
}
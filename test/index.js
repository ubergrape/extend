var extend = require('extend');
var assert = require('assert');

describe('extend([deep], obj1, ..., objN)', function () {

	it('should extend the first passed object', function () {
		var obj = { a: 'foo' };
		extend(obj, { a: 'bar', b: 'baz' });
		assert(obj.a === 'bar');
		assert(obj.b === 'baz');
	});

	it('should return the extended object', function () {
		var obj = { a: 'foo' };
		assert(extend(obj, { a: 'bar' }) === obj);
	});

	it('should extend with multiple objects', function () {
		var obj = { a: 'foo' };
		assert.deepEqual(extend(obj, { a: 'bar', b: 'baz' }, { c: 'bam' }), {
			a: 'bar',
			b: 'baz',
			c: 'bam'
		});
	});

	it('should skip falsy arguments', function () {
		var obj = { a: 'foo' };
		assert.deepEqual(extend(obj, { a: 'bar', b: 'baz' }, null, { c: 'bam' }), {
			a: 'bar',
			b: 'baz',
			c: 'bam'
		});
	});

	it('should deep extend when deep === true', function () {
		var obj = {
			a: 'foo',
			b: {
				a: 'foo',
				b: 'bar'
			}
		};
		assert.deepEqual(extend(true, obj, { a: 'bar', b: { b: 'baz' } }), {
			a: 'bar',
			b: {
				a: 'foo',
				b: 'baz'
			}
		});
	});

	it('should deep clone arrays when deep === true', function () {
		var obj = { a: 'foo', b: [1, {}] };
		var extension = { a: 'bar', b: [1, {}, 3] };
		extend(true, obj, extension);
		assert(obj.b !== extension.b);
		assert(obj.b[1] !== extension.b[1]);
		assert.deepEqual(obj, {
			a: 'bar',
			b: [1, {}, 3]
		});
	});

});
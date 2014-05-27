var expect = require('chai').expect;

var partialRight = require('../index').partialRight;

describe('partialRight()', function() {
	it('should apply arguments right to left', function() {
		var greet = function(greeting, name) { return greeting + ' ' + name; };
		var greetFred = partialRight(greet, 'fred');
		expect(greetFred('hi')).to.eql('hi fred');
	});
});
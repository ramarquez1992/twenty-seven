const expect = require('chai').expect;

describe('server', function() {
  const x = 3;

  describe('testFunc()', function() {
    it('x should equal 3', function() {
      expect(x).to.equal(3);
    });

    it('x should equal 5', function() {
      expect(x).to.equal(5);
    });
  });
});

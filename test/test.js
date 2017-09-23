const expect = require('chai').expect;

describe('server', function() {
  let x;

  describe('testFunc()', function() {
    it('x should equal 3', function() {
      x = 3;
      expect(x).to.equal(3);
    });

    it('x should equal 5', function() {
      x = 5;
      expect(x).to.equal(5);
    });
  });
});

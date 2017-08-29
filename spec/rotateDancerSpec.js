describe('RotateDancer', function() {

  var rotateDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    rotateDancer = new RotateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(rotateDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have the "rotateDancer" class', function() {
    expect(rotateDancer.$node[0].classList.contains('rotateDancer')).to.be.equal(true);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rotateDancer, 'step');
      expect(rotateDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(rotateDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(rotateDancer.step.callCount).to.be.equal(2);
    });
  });
});

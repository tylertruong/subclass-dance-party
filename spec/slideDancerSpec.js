describe('SlideDancer', function() {

  var slideDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slideDancer = new SlideDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slideDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have the "slideDancer" class', function() {
    expect(slideDancer.$node[0].classList.contains('slideDancer')).to.be.equal(true);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slideDancer, 'step');
      expect(slideDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slideDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slideDancer.step.callCount).to.be.equal(2);
    });
  });

});

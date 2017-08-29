class BlinkyDancer extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('blinkyDancer');
  }
  step () {
    super.step();
    this.$node.toggle();
  }

  lineUp (offset) {
    this.setPosition(2 * Math.floor(window.innerHeight / 3), offset);
  }
}
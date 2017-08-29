class RotateDancer extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.degreesRotated = 0;
    this.$node.addClass('rotateDancer');
  }

  step () {
    super.step();
    this.degreesRotated += 45;
    this.$node.css({
      transform: 'rotate(' + this.degreesRotated + 'deg)'
    });
  }

  lineUp (offset) {
    this.setPosition(Math.floor(window.innerHeight / 3), offset);
  }
}

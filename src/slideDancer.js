class SlideDancer extends Dancer {
  constructor (top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('slideDancer');
  }

  step () {
    super.step();

    if (Math.random() < 0.5) {
      if (this.$node.position().left > 300 && this.$node.position().left < window.innerWidth - 300) {
        if (Math.random() < 0.5) {
          this.$node.animate({ left: '+=250px' });
        } else {
          this.$node.animate({ left: '-=250px' });
        }
      } else if (this.$node.position().left <= 300) {
        this.$node.animate({ left: '+=250px' });
      } else {
        this.$node.animate({ left: '-=250px' } );
      }
    } else {
      if (this.$node.position().top > 300 && this.$node.position().top < window.innerHeight - 300) {
        if (Math.random() < 0.5) {
          this.$node.animate({ top: '+=250px' });
        } else {
          this.$node.animate({ top: '-=250px' });
        }
      } else if (this.$node.position().top <= 300) {
        this.$node.animate({ top: '+=250px' });
      } else {
        this.$node.animate({ top: '-=250px' });
      }
    }
  }

  lineUp () {
    // these dancers ignore the lineUp action
  }
}

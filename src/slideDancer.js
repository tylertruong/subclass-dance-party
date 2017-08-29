var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slideDancer');
};

SlideDancer.prototype = Object.create(Dancer.prototype);

SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);

  if (Math.random() < 0.5) {
    if (this.$node.position().left > 300 && this.$node.position().left < window.innerWidth - 300){
      if (Math.random() < 0.5) {
        this.$node.animate({ left: '+=250px' });
      } else {
        this.$node.animate({ left: '-=250px' });
      }
    } else if (this.$node.position().left <= 300) {
        this.$node.animate({ left: '+=250px' } );
    } else {
        this.$node.animate({ left: '-=250px' } );
    }
  } else {
    if (this.$node.position().top > 300 && this.$node.position().top < window.innerHeight - 300){
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
};

SlideDancer.prototype.lineUp = function() {
  // these dancers ignore the lineUp action
};

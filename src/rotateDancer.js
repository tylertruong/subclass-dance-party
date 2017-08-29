var RotateDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.degreesRotated = 0;
  this.$node.addClass('rotateDancer');
};

RotateDancer.prototype = Object.create(Dancer.prototype);

RotateDancer.prototype.constructor = RotateDancer;

RotateDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.degreesRotated += 45;
  this.$node.css({
    transform: 'rotate(' + this.degreesRotated + 'deg)'
  });
};

Dancer.prototype.lineUp = function(offset) {
  this.setPosition(Math.floor(window.innerHeight/3), offset);
};

RotateDancer.prototype.danceWithPartner = function(otherDancer) {
  this.$node.addClass('colorChangeDancerEffect');
  otherDancer.$node.addClass('colorChangeDancerEffect');
};

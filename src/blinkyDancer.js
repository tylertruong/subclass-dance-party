var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinkyDancer');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};

Dancer.prototype.lineUp = function(offset) {
  this.setPosition(2*Math.floor(window.innerHeight/3), offset);
};

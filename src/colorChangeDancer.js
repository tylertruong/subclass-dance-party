var ColorChangeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorChangeDancer.prototype = Object.create(Dancer.prototype);

ColorChangeDancer.prototype.constructor = makeColorChangeDancer;

ColorChangeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggleClass('dancerTurnBlue');
};

ColorChangeDancer.prototype.danceWithPartner = function(otherDancer) {
  this.$node.addClass('colorChangeDancerEffect');
  otherDancer.$node.addClass('colorChangeDancerEffect');
};

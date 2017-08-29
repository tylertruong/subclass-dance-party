// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');

  this.step();
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.danceProcessId;
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  this.danceProcessId = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(offset) { 
  this.setPosition(offset, 250);
};

makeDancer.prototype.danceWithPartner = function(otherDancer) {
  this.$node.addClass('dancerPartnerEffect');
  otherDancer.$node.addClass('dancerPartnerEffect');
};

makeDancer.prototype.stopDance = function() {
  clearTimeout(this.danceProcessId);
  this.danceProcessId = null;
};


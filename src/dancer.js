var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.danceProcessId;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function() {
  this.danceProcessId = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(offset) {
  this.setPosition(offset, Math.floor(window.innerWidth/2));
};

Dancer.prototype.danceWithPartner = function(otherDancer) {
  this.$node.addClass('dancerPartnerEffect');
  otherDancer.$node.addClass('dancerPartnerEffect');
};

Dancer.prototype.stopDance = function() {
  clearTimeout(this.danceProcessId);
  this.danceProcessId = null;
};

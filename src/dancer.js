class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.top = top;
    this.left = left;
    this.danceProcessId;
    this.setPosition(top, left);
    this.step();
  }

  step () {
    this.danceProcessId = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }

  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }

  lineUp (offset) {
    this.setPosition(offset, Math.floor(window.innerWidth / 2));
  }

  danceWithPartner (otherDancer) {
    this.$node.addClass('dancerPartnerEffect');
    otherDancer.$node.addClass('dancerPartnerEffect');
  }

  stopDance () {
    clearTimeout(this.danceProcessId);
    this.danceProcessId = null;
  }
}

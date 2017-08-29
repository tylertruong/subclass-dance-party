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

  danceWithPartner (partner) {
    const colors = ['blue', 'green', 'pink', 'purple', 'teal', 'grey', 'white', 'black', 'orange', 'yellow'];
    var partnerStyle = {
      'border': '10px solid', 
      'border-radius': '100px'
    };
    partnerStyle['border-color'] = colors[Math.floor(Math.random() * colors.length)];
    this.$node.css(partnerStyle);
    partner.$node.css(partnerStyle);
  }

  stopDance () {
    clearTimeout(this.danceProcessId);
    this.danceProcessId = null;
  }
}

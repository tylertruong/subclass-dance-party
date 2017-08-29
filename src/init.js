$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    let dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    const classes = {Dancer, BlinkyDancer, RotateDancer, SlideDancer}; 
    let dancerMakerFunction = classes[dancerMakerFunctionName];

    // make a dancer with a random position
    let dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', event => {
    window.dancers.forEach((dancer, index) => {
      dancer.lineUp(index * 120);
    });
  });

  $('.findPartnerButton').on('click', event => {
    const partnerDistanceThreshold = 300;
    const distancesBetweenDancers = [];
    const fixedDancers = window.dancers.filter(dancer =>
      dancer.constructor.name !== 'SlideDancer'
    );
    for (let i = 0; i < fixedDancers.length; i++) {
      for (let j = 0; j < fixedDancers.length; j++) {
        if (i === j) {
          continue;
        }
        const verticalDistance = fixedDancers[i].top - fixedDancers[j].top;
        const horizontalDistance = fixedDancers[i].left - fixedDancers[j].left;
        const distance = Math.sqrt(Math.pow(verticalDistance, 2) + Math.pow(horizontalDistance, 2));
        if (distance <= partnerDistanceThreshold) {
          distancesBetweenDancers.push([distance, fixedDancers[i], fixedDancers[j]]);
        }
      }
    }
    distancesBetweenDancers.sort((d1, d2) => d1[0] - d2[0]);

    const alreadyPartnered = [];
    distancesBetweenDancers.forEach(pair => {
      if (!(alreadyPartnered.includes(pair[1]) || alreadyPartnered.includes(pair[2]))) {
        alreadyPartnered.push(...[pair[1], pair[2]]);
        pair[1].danceWithPartner(pair[2]);
      } 
    });
  });

  $('.addDancerButton').on('click', () => {
    $('.dancer').mouseover( () => {
      window.dancers.forEach(dancer => {
        if (dancer.danceProcessId) {
          dancer.stopDance();
        } else {
          dancer.step();
        }
      }); 
    });
    $('.dancer').draggable({containment: 'parent'});
  });

});

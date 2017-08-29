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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(dancer, index) {
      dancer.lineUp(index * 30);
    });
  });

  $('.findPartnerButton').on('click', function(event) {
    for (var i = 0; i < window.dancers.length; i++) {
      var minPartner = window.dancers[i];
      for (var j = 0; j < window.dancers.length; j++) {
        if (i === j) {
          continue;
        }
        var verticalDistance = window.dancers[i].top - window.dancers[j].top;
        var horizontalDistance = window.dancers[i].left - window.dancers[j].left;
        var distance = Math.sqrt(Math.pow(verticalDistance, 2) + Math.pow(horizontalDistance, 2));
        var minDistance = minDistance || distance;
        if (distance <= minDistance) {
          minDistance = distance;
          minPartner = window.dancers[j];
        }
          
      }
      window.dancers[i].danceWithPartner(minPartner);
    }
  });
  
  $('.addDancerButton').on('click', function() {
    $('.dancer').mouseenter(function() {
      //console.log('AHH!! A MOUSE! STOP!!!!');
      //$('.dancer').addClass('dancer-stopper');
      window.dancers.forEach(dancer => {
        if (dancer.danceProcessId) {
          dancer.stopDance();
        } else {
          dancer.step();
        }

      });
    });
  });

});


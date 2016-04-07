

var prob = 5000;
var button;

var started = false;
var total = 0;

var entrants;

function setup() {
  noCanvas();
  entrants = select('#entrants');
  entrants.input(updateProbability);


  button = select('#start');
  button.mousePressed(startLottery);
  noLoop();
}

function updateProbability() {
  prob = entrants.html() / 10;
  select('#chance').html(prob);

  var notwinning = (prob - 1) / (prob);
  var num = log(0.01)/log(notwinning);
  select('#99percent').html(floor(num));

}

function startLottery() {
  started = true;
  total = 0;
  loop();
}

function draw() {
  if (started) {
    var r = floor(random(prob));

    var results = select('#results');

    if (r == 1) {
      results.html('You won!');
      noLoop();
      //console.log('won lottery');
    } else {
      results.html('Try again');
      //console.log('lost lottery');
    }
    total++;

    select('#total').html(total);
  }

}
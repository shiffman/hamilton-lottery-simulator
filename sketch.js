

var prob = 50000/23;
var button;

var started = false;
var total = 0;

var entrants;

function setup() {
  noCanvas();
  entrants = select('#entrants');
  tickets = select('#tickets');
  entrants.input(updateProbability);
  tickets.input(updateProbability);
  
  cityNY = select('#cityNY');
  cityCH = select('#cityCH');
  cityNY.mousePressed(updateProbability);
  cityCH.mousePressed(updateProbability);
  
  button = select('#start');
  button.mousePressed(startLottery);
  
  noLoop();
}

function updateProbability() {
  tickets.html(document.querySelector('input[name="city"]:checked').value);
  prob = entrants.html() / tickets.html();
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
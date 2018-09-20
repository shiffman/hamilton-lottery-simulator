

var prob = 50000/23;
var button;

var started = false;
var total = 0;

var entrants;
var results;

function setup() {
  noCanvas();
  entrants = select('#entrants');
  tickets = select('#tickets');
  entrants.input(updateProbability);
  tickets.input(updateProbability);
  
  cityNY = select('#cityNY');
  cityCH = select('#cityCH');
  cityLA = select('#cityLA');
  cityNY.mouseClicked(updateCity);
  cityCH.mouseClicked(updateCity);
  cityLA.mouseClicked(updateCity);
  cityNY.mouseClicked(updateProbability);
  cityCH.mouseClicked(updateProbability);
  cityLA.mouseClicked(updateProbability);
  
  button = select('#start');
  button.mouseClicked(startLottery);
  results = select('#results');
  
  noLoop();
}

function updateCity() {
tickets.html(document.querySelector('input[name="city"]:checked').value);

}

function updateProbability() {
  prob = entrants.html() / tickets.html();
  select('#chance').html(prob);

  var notwinning = (prob - 1) / (prob);
  var num = log(0.01)/log(notwinning);
  select('#99percent').html(floor(num));

}

function startLottery() {
  started = true;
  results.style('background-color', 'white');
  total = 0;
  loop();
}

function draw() {
  if (started) {
    var r = floor(random(prob));

    if (r == 0) {
      results.html('You won!');
      results.style('background-color', 'rgb(200, 200, 200)');
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
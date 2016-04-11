var prob = 5000;
var total = 0;

function setup() {
  noCanvas();
  entrants = select('#entrants');
  chance = select('#chance');
  times = select('#times');
  percent = select('#percent');
  tickets = select('#tickets');
  button = select('#start');

  entrants.input(updateEntrants);
  chance.input(updateChance);
  percent.input(updatePercent);
  button.mousePressed(startLottery);
  noLoop();
}

function updateEntrants() {
  chance.html(entrants.html() / tickets.html());
  times.html('~' + int(log(1 - percent.html() / 100)/log((chance.html() - 1) / chance.html())));
}

function updateChance() {
  entrants.html(chance.html() * tickets.html());
  times.html('~' + int(log(1 - percent.html() / 100)/log((chance.html() - 1) / chance.html())));
}

function updatePercent() {
  times.html('~' + int(log(1 - percent.html() / 100) / log((chance.html() - 1) / chance.html())));
}

function startLottery() {
  total = 0;
  loop();
}

function draw() {
  var results = select('#results');
  if (int(random(prob)) == 1) {
    results.html('You won!');
    noLoop();
  } else {
    results.html('Try again');
  }
  select('#total').html(total);
  total++;
}

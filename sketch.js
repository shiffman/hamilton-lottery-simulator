var total = 0;

var totalSpan;
var lotteryStatus;
var button;

var startTime = 0;

var started = false;

var secondsSpan;
var minutesSpan;

function setup() {
  noCanvas();
  button = select('#lottery');
  noLoop();
  button.mousePressed(function() {
    loop();
    startTime = millis();
    started = true;
  });

  totalSpan = select('#number');  
  lotteryStatus = select('#status');

  secondsSpan = select('#seconds');
  minutesSpan = select('#minutes');
}

function draw() {
  if (started) {
    var r = floor(random(5000));
    if (r == 100) {
      lotteryStatus.html("You have won!");
      noLoop();
    } else {
      lotteryStatus.html("Try again.");
    }
    total++;
    totalSpan.html(total);

    var now = millis();
    var timePassed = now - startTime;

    var seconds = floor(timePassed / 1000);
    var secs = seconds % 60;
    var mins = floor(seconds / 60);

    secondsSpan.html(secs);
    minutesSpan.html(mins);


  }
}



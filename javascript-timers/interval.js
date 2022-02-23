var counter = 4;
var $countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  counter--;
  if (counter > 0) {
    $countdownDisplay.textContent = counter;
  } else {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(counterId);
  }
}

var counterId = setInterval(countdown, 1000);

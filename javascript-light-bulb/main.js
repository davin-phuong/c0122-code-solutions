var lightOn = true;
var $lightBulb = document.querySelector('.light');
var $background = document.querySelector('.background');

function lightOnOrOff(event) {
  if (lightOn === true) {
    $lightBulb.className = 'light-on';
    lightOn = !lightOn;
    $background.className = 'background-light';
  } else {
    $lightBulb.className = 'light-off';
    lightOn = !lightOn;
    $background.className = 'background-dark';
  }
}

$lightBulb.addEventListener('click', lightOnOrOff);

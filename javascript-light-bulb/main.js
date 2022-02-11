var lightOn = true;
var $lightBulb = document.querySelector('.light');
var $background = document.querySelector('.background');

function lightOnOrOff(event) {
  if (lightOn === true) {
    $lightBulb.className = 'light-on';
    lightOn = !lightOn;
  } else {
    $lightBulb.className = 'light-off';
    $background.className = 'background-dark';
    lightOn = !lightOn;
  }
}

$lightBulb.addEventListener('click', lightOnOrOff);

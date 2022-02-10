var lightOn = true;
var $lightBulb = document.querySelector('.light');

function lightOnOrOff(event) {
  if (lightOn === true) {
    $lightBulb.className = 'light-on';
    lightOn = !lightOn;
  } else {
    $lightBulb.className = 'light-off';
  }
}

$lightBulb.addEventListener('click', lightOnOrOff);

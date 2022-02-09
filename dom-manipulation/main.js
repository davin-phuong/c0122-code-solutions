var numberOfClicks = 0;

var $hotButton = document.querySelector('.hot-button');

var $clickCount = document.querySelector('.click-count');

function clicks(event) {
  numberOfClicks++;
  $clickCount.textContent = 'Clicks: ' + numberOfClicks;

  if (numberOfClicks < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (numberOfClicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (numberOfClicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (numberOfClicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (numberOfClicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clicks);

/*
1. keep track of how many clicks there are
2. grab the button element
3. grab the click-count element
4. each time the button is clicked, increase the number of clicks by 1
5. match the number of clicks to the click-count element
6. if the number of clicks is less than 4, update the text to show the button is cold
7. if the number of clicks is less than 7, update the text to show the button is cool
8. if the number of clicks is less than 10, update the text to show the button is tepid
9. if the number of clicks is less than 13, update the text to show the button is warm
10. if the number of clicks is less than 16, update the text to show the button is hot
11. otherwise update the text to show the button is nuclear
12. when the button is clicked, the number of clicks gets updated along with text indicating
the temperature of the button
*/

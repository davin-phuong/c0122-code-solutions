var $keys = document.querySelectorAll('span');
var index = 0;

document.addEventListener('keydown', function (event) {
  if (event.key === $keys[index].textContent) {
    $keys[index].className = 'correct-letter';
    index++;
    $keys[index].className = 'border-bottom';
  } else {
    $keys[index].className = 'incorrect-letter red-border-bottom';
  }
});

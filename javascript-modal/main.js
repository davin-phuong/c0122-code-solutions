var $modalButton = document.querySelector('.modal-button');
var $background = document.querySelector('.background');
var $surveyButton = document.querySelector('.survey-button');

$modalButton.addEventListener('click', function (event) {
  $background.className = 'background';
});

$surveyButton.addEventListener('click', function (event) {
  $background.className = 'background hidden';
});

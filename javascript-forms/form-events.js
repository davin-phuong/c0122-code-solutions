function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event.target.name:', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name:', event.target.name);
  console.log('value:', event.target.value);
}

var $inputName = document.querySelector('input');
var $inputEmail = document.querySelector('input');
var $textSection = document.querySelector('textarea');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textSection.addEventListener('focus', handleFocus);
$textSection.addEventListener('blur', handleBlur);
$textSection.addEventListener('input', handleInput);

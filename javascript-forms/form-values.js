
function submit(event) {
  event.prevent();
}

var $contactForm = document.querySelector('form');

$contactForm.addEventListener('submit', submit);

var formData = {};

formData.name = $contactForm.elements.name.value;
formData.email = $contactForm.elements.email.value;
formData.message = $contactForm.elements.message.value;

console.log(formData);

document.querySelector('form').reset();

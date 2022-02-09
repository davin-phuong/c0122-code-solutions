var $contactForm = document.querySelector('#contact-form');

function submit(event) {
  event.preventDefault();
  var name = $contactForm.elements.name.value;
  var email = $contactForm.elements.email.value;
  var message = $contactForm.elements.message.value;

  var formData = {
    name: name,
    email: email,
    message: message
  };
  console.log('formData: ', formData);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', submit);

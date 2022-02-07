console.log('hello world');

var $header = document.querySelector('h1');
console.log('h1 element:', $header);

console.dir($header);

var $explanation = document.querySelector('#explanation');
console.log('id explanation:', $explanation);

console.dir($explanation);

var $hint = document.querySelector('.hint');
console.log('class hint: ', $hint);

console.dir($hint);

var $paragraph = document.querySelectorAll('p');
console.log('p elements node list:', $paragraph);

var $exampleLink = document.querySelectorAll('.example-link');
console.log('example-link node list:', $exampleLink);

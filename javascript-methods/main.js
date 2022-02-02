var mathObject = [1, 2, 3];
var maximumValue = Math.max(...mathObject);

console.log('maximum value: ', maximumValue);

var heroes = ['Spiderman', 'Flash', 'Wonder Woman', 'Batman'];

var randomNumber = Math.random(mathObject);
console.log('randomNumber: ', randomNumber);

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Crying in H Mart',
    author: 'Michelle Zauner'
  },
  {
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune'
  },
  {
    title: 'Six Crimson Cranes',
    author: 'Elizabeth Lim'
  }
];

var lastBook = library.pop();
console.log('lastBook: ', lastBook);

var firstBook = library.shift();
console.log('firstBook: ', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library: ', library);

var fullName = 'Davin Phuong';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName: ', firstAndLastName);

var firstName = firstAndLastName[0];
console.log('firstName: ', firstName);

var sayMyName = firstName.toUpperCase();
console.log('sayMyName: ', sayMyName);

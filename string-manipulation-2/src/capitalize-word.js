/* exported capitalizeWord */

function capitalizeWord(word) {
  var capitalWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();

  if (capitalWord === 'Javascript') {
    return 'JavaScript';
  } else {
    return capitalWord;
  }
}

/*
- separate the first character from the word
- capitalize the first character of the word
- make all other characters of the word lowercase
- combine word back together
- if the word is any variation of Javascript, return JavaScript
- return the capitalized word
*/

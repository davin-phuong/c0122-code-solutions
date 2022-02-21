/* exported capitalizeWords */

function capitalizeWords(string) {
  var splitString = string.toLowerCase().split(' ');

  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1);
  }
  return splitString.join(' ');
}

/*
- create storage for array of lowercase words
  - make the string lowercase
  - if there is a space, divide string into an array of words
- go through each word in the array and capitalize the first letter
- combine the capitalized letter to the rest of the word
- add a space between each word then join all words to create a string
- return the string
*/

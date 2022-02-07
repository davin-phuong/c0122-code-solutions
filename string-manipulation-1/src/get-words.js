/* exported getWords */

function getWords(string) {
  var words = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      return string.split(' ');
    }
  }
  return words;
}

/*
1. create storage for empty array of empty words
2. if string does not contain an empty space, break each word in the string and return as an array
3. if string contains empty space, return array of empty words
*/

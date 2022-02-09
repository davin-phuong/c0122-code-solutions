/* exported getWords */

function getWords(string) {
  var words = [];
  var currentWord = '';

  if (string === '') {
    return [];
  }

  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      words.push(currentWord);
      currentWord = '';
    }
  }
  words.push(currentWord);
  return words;
}

/*
1. create storage for words
2. create storage for current word
3. look for words and if there aren't any, return empty storage of words
4. if there is a word, look for space between each character
5. if there is no space, add each letter to current word
6. if there is a space, add current word to words list then clear out the word
7. give back list of words
*/

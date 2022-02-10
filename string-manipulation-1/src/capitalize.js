/* exported capitalize */

function capitalize(word) {
  var lowerCaseWord = word.toLowerCase();
  return word[0].toUpperCase(word) + lowerCaseWord.slice(1);
}

/*
1. make all characters in word string lowercase
2. get first character in word string and capitalize it
3. take out lowercase characters and add it to the capital letter to create word
4. return the word
*/

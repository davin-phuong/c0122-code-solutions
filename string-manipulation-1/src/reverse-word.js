/* exported reverseWord */

function reverseWord(word) {
  var reversedWord = '';

  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}

/*
1. create storage for reversed word
2. start at the last character of the string and decrease by one
3. add each character together to create reversed word
3. return reversed word
*/

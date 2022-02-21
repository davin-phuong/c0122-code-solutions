/* exported numVowels */

function numVowels(string) {
  var lowerCaseString = string.toLowerCase();
  var number = 0;

  for (var i = 0; i < string.length; i++) {
    if (lowerCaseString[i] === 'a' || lowerCaseString[i] === 'e' || lowerCaseString[i] === 'i' ||
    lowerCaseString[i] === 'o' || lowerCaseString[i] === 'u') {
      number += 1;
    }
  }
  return number;
}

/*
- make string lowercase and add to storage
- start number count of vowels at 0
- if the string has a vowel
- add one to the number count each time there is a vowel
- return the number count of vowels
*/

/* exported ransomCase */

function ransomCase(string) {
  var casedWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      casedWord += string[i].toLowerCase();
    } else {
      casedWord += string[i].toUpperCase();
    }
  }
  return casedWord;
}

/*
- create storage for ransom cased word
- look at each character in the string
- capitalize odd numbered characters
- lowercase even numbered characters
- combine the characters together to create ransom cased word
- return ransom cased word
*/

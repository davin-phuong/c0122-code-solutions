/* exported isVowel */

function isVowel(char) {
  var lowerChar = char.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < vowels.length; i++) {
    if (lowerChar === vowels[i]) {
      return true;
    }
  }
  return false;
}

/*
1. convert character to lowercase letter
2. create list of vowels
3. if character matches list of vowels, return true
4. if character does not match list of vowels, return false
*/

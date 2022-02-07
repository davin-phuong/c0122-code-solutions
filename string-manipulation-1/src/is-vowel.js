/* exported isVowel */

function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
  char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U'
  ) {
    return true;
  }
  return false;
}

/*
1. if character contains a, e, i, o, u or A, E, I, O, U return true
2. else return false
*/

/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var swappedString = '';

  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += string[secondIndex];
    } else if (i === secondIndex) {
      swappedString += string[firstIndex];
    } else {
      swappedString += string[i];
    }
  }
  return swappedString;
}

/*
- create storage for swapped string
- if the character is at the first index, swap it with the character at
the second index
- if the character is at the second index, swap it with the character at
the first index
- otherwise, return the swapped string with the character at the index
- return the swapped string
*/

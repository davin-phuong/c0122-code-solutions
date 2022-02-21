/* exported firstChars */

function firstChars(length, string) {
  var shortString = '';

  for (var i = 0; i < string.length; i++) {
    if (i <= length) {
      shortString = string.substring(0, length);
    }
  }
  return shortString;
}

/*
- create storage for shortened string
- check to see if the string length is less than length
- move part of the string between the start index (0)
and end index (length) into storage
- return shortened string
*/

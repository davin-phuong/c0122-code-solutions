/* exported lastChars */

function lastChars(length, string) {
  var shortString = string.slice(-length);
  return shortString;
}

/*
- create storage for shortened string
- make shortened string by moving part of original string starting
from the end of the length
- return shortened string
*/

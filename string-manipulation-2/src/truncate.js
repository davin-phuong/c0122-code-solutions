/* exported truncate */

function truncate(length, string) {
  var truncatedWord = '';

  truncatedWord = string.slice(string[length], length) + '...';
  return truncatedWord;
}

/*
- create storage for truncated word
- remove letters beginning at the length of the word then add an ellipsis
- return truncated word
*/

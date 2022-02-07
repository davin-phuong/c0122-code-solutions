/* exported reverse */

function reverse(array) {
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.push(array[array.length - 1 - i]);
  }
  return reversedArray;
}

/*
1. create storage for reversed array items
2. grab the last array and move backwards to fill in array storage
3. return reversed array
*/

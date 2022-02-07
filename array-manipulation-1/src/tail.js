/* exported tail */

function tail(array) {
  var tailedArray = [];
  for (var i = 1; i < array.length; i++) {
    tailedArray.push(array[i]);
  }
  return tailedArray;
}

/*
1. create storage for array containing elements after the first element
2. start at the second element and add all elements to array
3. return elements in the array
*/

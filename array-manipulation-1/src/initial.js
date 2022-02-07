/* exported initial */

function initial(array) {
  var exceptLast = [];
  for (var i = 0; i < array.length - 1; i++) {
    exceptLast.push(array[i]);
  }
  return exceptLast;
}

/*
1. create storage for array containing elements except the last element
2. start at the first element and grab all elements before the last and add to array
3. return elements in the array
*/

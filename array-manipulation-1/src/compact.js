/* exported compact */

function compact(array) {
  var truthy = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}

/*
1. create storage for array of truthy values
2. check if the element in the array has a truthy value and add to array
3. return array of truthy values
*/

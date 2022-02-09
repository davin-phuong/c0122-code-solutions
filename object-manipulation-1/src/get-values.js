/* exported getValues */

function getValues(object) {
  var values = [];

  for (var i in object) {
    values.push(object[i]);
  }
  return values;
}

/*
1. create storage for property values
2. retrieve object's property values and add to storage
3. return list of values
*/

/* exported toObject */

function toObject(keyValuePair) {
  var object = {};
  var key = keyValuePair[0];
  var value = keyValuePair[1];

  object[key] = value;
  return object;
}

/*
1. create storage for object
2. keep track of property name (key)
3. keep track of value
4. assign value to object at property name
5. return object
*/

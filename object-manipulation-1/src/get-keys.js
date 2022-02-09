/* exported getKeys */

function getKeys(object) {
  var keys = [];

  for (var i in object) {
    keys.push(i);
  }
  return keys;
}

/*
1. create storage for object's property keys
2. go into the object to find its property
3. take the property and put inside storage
4. return storage containing list of properties
*/

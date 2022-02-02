function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSeconds: ', convertMinutesToSecondsResult);

function greet(name) {
  return '"Hey ' + name + '"';
}

var greeting = greet('Beaver');
console.log('greeting: ', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);
console.log('area of rectangle: ', area);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('firstName: ', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('last element of the array: ', lastElement);

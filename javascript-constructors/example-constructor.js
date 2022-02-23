function ExampleConstructor() {}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var aConstructor = new ExampleConstructor();
console.log('aConstructor:', aConstructor);
console.log('value of prototype property of aConstructor:', aConstructor.__proto__);
console.log('typeof aConstructor:', typeof aConstructor.__proto__);

var isInstance = aConstructor instanceof ExampleConstructor;
console.log('isInstance:', isInstance);

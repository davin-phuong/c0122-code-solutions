function ExampleConstructor() {}
console.log('value of prototype property of ExampleConstructor:', ExampleConstructor.prototype);
console.log('typeof prototype property of ExampleConstructor:', typeof ExampleConstructor.prototype);

var aConstructor = new ExampleConstructor();
console.log('aConstructor:', aConstructor);

var isInstance = aConstructor instanceof ExampleConstructor;
console.log('isInstance:', isInstance);

var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('typeof bookshelf:', typeof bookshelf);

var bookshelfJsonString = JSON.stringify(bookshelf);
console.log('JSON string of bookshelf:', bookshelfJsonString);

var studentJsonString = '{"number id": 4, "string name": "Mocha"}';

console.log('studentJsonString:', studentJsonString);
console.log('typeof studentJsonString:', typeof studentJsonString);

var parsedObject = JSON.parse(studentJsonString);

console.log('parsedObject:', parsedObject);
console.log('typeof parsedObject:', typeof parsedObject);

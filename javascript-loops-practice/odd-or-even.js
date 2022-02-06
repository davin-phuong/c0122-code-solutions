/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddOrEvenNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      numbers[i] = 'even';
      oddOrEvenNumbers.push(numbers[i]);
    } else {
      numbers[i] = 'odd';
      oddOrEvenNumbers.push(numbers[i]);
    }
  }
  return oddOrEvenNumbers;
}

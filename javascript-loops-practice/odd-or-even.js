/* exported oddOrEven */

function oddOrEven(numbers) {
  var oddOrEvenNumbers = [];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenNumbers.push('even');
    } else {
      oddOrEvenNumbers.push('odd');
    }
  }
  return oddOrEvenNumbers;
}

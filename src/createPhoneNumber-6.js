function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ") ");
  numbers.splice(8, 0, "-");
  return numbers.reduce((acc, val) => acc.toString() + val.toString());
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


function createPhoneNumber2(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);


function createPhoneNumber(numbers) {
  var format = "(xxx) xxx-xxxx";
  for (var i = 0; i < numbers.length; i++) {
    format = format.replace("x", numbers[i]);
  }
  return format;
}

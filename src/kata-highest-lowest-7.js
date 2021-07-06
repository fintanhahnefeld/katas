function highAndLow(numbers){
  const splitNumbers = numbers.split(" ");
  let high = +splitNumbers[0];
  let low = +splitNumbers[0];
  for (let num of splitNumbers) {
    if (+num > high) {high = +num}
    if (+num < low) {low = +num}
  }
  return `${high} ${low}`
}


highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
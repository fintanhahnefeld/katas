function multiTable(number) {
  let result = '';
  for (let i = 1; i < 10; i++) {
    result += `${i} * ${number} = ${i * number}\n`
  }
  result += `10 * ${number} = ${10 * number}`
  return result
}

multiTable(5)
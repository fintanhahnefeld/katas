const str = "Hey fellow warriors"

function spinWords(string) {
  const array = string.split(' ')
  const result = array.map((el) => {
    if (el.length > 4) {
     return el.split('').reverse().join('')
    } 
    return el
  })
  return result.join(' ')
}

console.log(spinWords(str))
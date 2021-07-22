function createArrayOfTiers(num) {
    let arr = [];
    for(let i = 1; i <= num.length; i++) {
    arr.push(num.toString().slice(0,i))
    }
  return arr
}
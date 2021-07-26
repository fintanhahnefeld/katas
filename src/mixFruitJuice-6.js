function mixFruit (arr) { 
    const total = arr.reduce((acc,val) => {
      let x = val.toLowerCase();
      if(x === 'banana' || x === 'orange' || x === 'apple' || x === 'lemon' || x === 'grapes') {return acc + 5}
      else if(x === 'avocado' || x === 'strawberry' || x === 'mango') {return acc + 7}
      else {return acc + 9}
    },0)
    return Math.round(total/arr.length)
  }
  
  mixFruit(['banana','mango','avocado'])
  
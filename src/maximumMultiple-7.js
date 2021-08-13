function maxMultiple(divisor, bound){
    for (let i = divisor; i <= bound; i += divisor) {
      if( i + divisor > bound) return i
    }
  }
  
  maxMultiple(3,10)
  maxMultiple(37,200)
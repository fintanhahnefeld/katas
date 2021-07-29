function persistence(num) {
    let count = 0;
    num = num.toString();
    while (num.length > 1) {
      count++;
      num = num.split('').map(Number)
        .reduce((acc,val) => acc *val).toString();
      console.log(+num)
    }
  return count;
}

 persistence(355)
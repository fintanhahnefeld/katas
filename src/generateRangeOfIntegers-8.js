function generateRange(min, max, step){
  let count = min
  let arr = [min]
  while (count + step <= max) {
    count += step;
    arr.push(count)
  }
  return arr
}


generateRange(2, 10, 2)
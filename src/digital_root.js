function digital_root(n) {
    const sum = n.toString()
        .split('')
        .map(e => +e)
        .reduce((acc,val) => acc += val, 0)
    return sum > 9 ? digital_root(sum) : sum
    }
console.log(digital_root(456))
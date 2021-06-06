function repeatStr (n, s) {
    let result = ''
    for (let i = 0; i < n; i++) {
      result += s
    }
    return result
  }
  repeatStr(6, "O")
  
  // or...
  
  function repeatString (n, s) {
    return s.repeat(n);
  }
  repeatString(5, "Hello")
  
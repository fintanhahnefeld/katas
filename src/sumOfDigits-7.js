function sum(digits) {
  if (digits===0) return '0 = 0'
 if (!digits) return ''
  digits=digits+''
 let calc = digits.split('').map((e) => {
   return e + ' + '
 }).join('').slice(0, -3)
 let sum = digits.split('').reduce((acc,val) => {
   return +acc + +val
 },0)
 return `${calc} = ${sum}`
}

sum("3433")
sum("64323")
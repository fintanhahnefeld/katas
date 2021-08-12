function removeDuplicateWords (s) {
    return [...new Set(s.split(' '))].join(' ')
}
  
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
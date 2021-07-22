function filterLongWords(sentence, n) {
  return sentence.split(' ').filter(word => word.length > n)
}

filterLongWords("The quick brown fox jumps over the lazy dog", 4)
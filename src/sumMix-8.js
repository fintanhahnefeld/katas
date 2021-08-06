function sumMix(x) {
  return x.reduce((acc, val) => acc + +val, 0);
}

sumMix([9, 3, "7", "3"]);

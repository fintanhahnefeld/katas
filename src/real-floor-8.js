function getRealFloor(n) {
    if (n > 0 && n < 13) return n - 1;
    if (n > 13) return n - 2;
    return n;
}
  
getRealFloor(20)
getRealFloor(1)
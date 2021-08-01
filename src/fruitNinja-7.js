function cutFruits(fruits) {
  const cutFruit = [];
  for (fruit of fruits) {
    if (fruitsName.includes(fruit)) {
      cutFruit.push(fruit.slice(0, Math.round(fruit.length / 2)));
      cutFruit.push(fruit.slice(Math.round(fruit.length / 2), fruit.length));
    } else {
      cutFruit.push(fruit);
    }
  }
  return cutFruit;
}

cutFruits(["apple", "pear", "banana", "bomb"]);

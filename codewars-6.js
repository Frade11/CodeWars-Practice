function generatePairs(n) {
  const pairs = [];
  for (let a = 0; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      pairs.push([a, b]);
    }
  }
  return pairs;
}

//Pairs of integers from 0 to n
function generatePairs(n) {
  const pairs = [];
  for (let a = 0; a <= n; a++) {
    for (let b = a; b <= n; b++) {
      pairs.push([a, b]);
    }
  }
  return pairs;
}
console.log(generatePairs(2));
function solution(d, budget) {
  d.sort((a, b) => a - b);

  let count = 0;

  for (let price of d) {
    if (budget >= price) {
      count++;
      budget -= price;
    }
  }

  return count;
}

function solution(amount) {
  const denominations = [100, 50, 10, 1];

  const change = [];
  for (const coin of denominations) {
    while (amount >= coin) {
      change.push(coin);
      amount -= coin;
    }
  }

  return change;
}

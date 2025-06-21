function solution(a, b, n) {
  let sum = 0;

  while (n >= a) {
    const newBottles = Math.floor(n / a) * b;
    const restBottles = n % a;
    sum += newBottles;
    n = newBottles + restBottles;
  }

  return sum;
}

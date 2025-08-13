function solution(arr) {
  // 최대공약수
  const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }

    return a;
  };

  // 최소공배수
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return arr.reduce((acc, num) => lcm(acc, num));
}

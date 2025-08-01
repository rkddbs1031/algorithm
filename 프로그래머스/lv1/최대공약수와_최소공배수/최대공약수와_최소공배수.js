function solution(n, m) {
  const gcd = (a, b) => {
    while (a !== 0 && b !== 0) {
      if (a > b) a %= b;
      else b %= a;
    }

    return a + b; // 다른 하나가 0이 되기 때문
  };

  const greatest = gcd(n, m);
  const least = (n * m) / greatest;

  return [greatest, least];
}

// const gcd = (a, b) => {
//   return b === 0 ? a : gcd(b, a % b);
// };

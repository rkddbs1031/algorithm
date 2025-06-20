function solution(n) {
  return Number(
    n
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

function solution2(n) {
  const digits = Array.from(n.toString(), Number); // [1,1,8 ...]
  digits.sort((a, b) => b - a);
  return Number(digits.join(''));
}

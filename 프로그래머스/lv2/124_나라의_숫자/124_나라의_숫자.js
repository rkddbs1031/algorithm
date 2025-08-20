function solution(n) {
  const digits = [4, 1, 2]; // 0 -> 4, 1 -> 1, 2 -> 2
  let result = '';

  while (n > 0) {
    let remainder = n % 3;

    result = digits[remainder] + result;
    n = Math.floor((n - 1) / 3);
  }

  return result;
}

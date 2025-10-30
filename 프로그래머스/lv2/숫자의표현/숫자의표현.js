function solution(n) {
  let start = 1,
    end = 1,
    sum = 1;
  let count = 0;

  while (start <= n) {
    if (sum === n) {
      count++;
      sum -= start++;
    } else if (sum < n && end < n) {
      end++;
      sum += end;
    } else {
      sum -= start++;
    }
  }

  return count;
}

function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    let A = a[col - 1];
    let B = b[col - 1];

    if (A !== B) {
      return A - B;
    } else {
      return b[0] - a[0];
    }
  });

  let answer = 0;
  for (let i = row_begin; i <= row_end; i++) {
    answer ^= data[i - 1].reduce((acc, cur) => acc + (cur % i), 0);
  }
  return answer;
}

/**
 * ## 문제 풀이
 * 1. 주어진 데이터를 col-1번째 원소 기준으로 오름차순 정렬하고, 동일하다면 0번째 데이터를 기준으로 내림차순 정렬한다.
 * 2. 정렬한 데이터를 기반으로 row_begin 행부터 row_end 행까지 데이터 튜플을 i로 나누고 모두 더한다.
 * 3. 더한 값을 XOR 누적한다.
 */
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

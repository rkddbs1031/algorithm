/* 
 N까지 for문을 돌아서 합이 target과 같아지면 
 조합 결과를 result에 추가하기
 target보다 넘으면 백트래킹
 */

function solution(N) {
  const target = 10;
  const results = [];

  function backTrack(sum, arr, start) {
    if (sum === target) {
      results.push(arr);
      return;
    }

    for (let num = start; num <= N; num++) {
      if (sum + num <= target) {
        backTrack(sum + num, [...arr, num], num + 1);
      }
    }
  }

  backTrack(0, [], 1);
  return results;
}

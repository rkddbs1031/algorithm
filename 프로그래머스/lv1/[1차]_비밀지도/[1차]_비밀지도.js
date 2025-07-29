/**
 * ## 문제 풀이
 * 1. 하나씩 arr1,arr2의 데이터를 조회해야하기 때문에 for문으로 진행
 * 2. 이진수로 만들기 위해 toString(2)를 하고 n자리수로 맞춰야하기 때문에 0으로 시작되는 부분 고려하여 padStart(n, '0')
 * 3. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이기 때문에 체크하여 '#' 삽입
 * 4. 해당 문자열 answer에 push
 *
 */

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let str = '';
    const a1 = arr1[i].toString(2).padStart(n, '0');
    const a2 = arr2[i].toString(2).padStart(n, '0');

    for (let j = 0; j < n; j++) {
      if (a1[j] === '1' || a2[j] === '1') str += '#';
      else str += ' ';
    }
    answer.push(str);
  }

  return answer;
}

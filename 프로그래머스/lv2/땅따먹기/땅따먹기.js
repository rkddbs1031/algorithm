/**
 *
 * ## 문제 풀이
 * 1. 2번째 행부터 시작해서 각 칸마다 직전 행의 같은 열을 제외한 최대값을 더한다.
 * 2. for문의 j는 각 칸이고 현재 행의 j열에 이전 행에서 j열을 제외한 칸 중 최대값을 구해서 더한다.
 * 3. 마지막 행에서 최대값인 최대 점수를 찾아 반환
 */

function solution(land) {
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      land[i][j] += Math.max(...land[i - 1].filter((_, idx) => idx !== j));
    }
  }
  return Math.max(...land[land.length - 1]);
}

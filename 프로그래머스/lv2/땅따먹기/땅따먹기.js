/**
 *
 * ## 직접 해석해보기 (DP로 풀어보기!)
 *
 * i => 행 j => 열
 * 0행 초기화
 * - dp[0][0] = land[0][0]
 * - dp[0][1] = land[0][1]
 * - dp[0][2] = land[0][2]
 * - dp[0][3] = land[0][3]
 *
 * 1행 (i = 1)
 * - 0번 열 (k = 0): 0행 0열에서는 올 수 없음. 즉, dp[1][0] = max(dp[0][1], dp[0][2], dp[0][3]) + land[1][0]
 * - 1번 열 : 0행 1열에서는 올 수 없음. 즉, dp[1][1] = max(dp[0][0], dp[0][2], dp[0][3]) + land[1][1]
 * - 2번 열 : 0행 2열에서는 올 수 없음. 즉, dp[1][2] = max(dp[0][0], dp[0][1], dp[0][3]) + land[1][2]
 * - 3번 열 : 0행 3열에서는 올 수 없음. 즉, dp[1][3] = max(dp[0][0], dp[0][1], dp[0][2]) + land[1][3]
 *
 * 2행 (i = 2)
 * - 0번 열 : 0행 0열에서는 올 수 없음. 즉, dp[2][0] = max(dp[1][1], dp[1][2], dp[1][3]) + land[2][0]
 * - 1번 열 : 0행 1열에서는 올 수 없음. 즉, dp[2][1] = max(dp[1][0], dp[1][2], dp[1][3]) + land[2][1]
 * - 2번 열 : 0행 2열에서는 올 수 없음. 즉, dp[2][2] = max(dp[1][0], dp[1][1], dp[1][3]) + land[2][2]
 * - 3번 열 : 0행 3열에서는 올 수 없음. 즉, dp[2][3] = max(dp[1][0], dp[1][1], dp[1][2]) + land[2][3]
 *
 * 일반화:
 * dp[i][j] = max(dp[i-1][k]) + land[i][j]  (k ≠ j)
 *
 *
 */

function solution2(land) {
  const n = land.length;
  const m = land[0].length;
  const dp = Array.from({ length: n }, () => Array(m).fill(0));
  // 초기화
  dp[0][0] = land[0][0];
  dp[0][1] = land[0][1];
  dp[0][2] = land[0][2];
  dp[0][3] = land[0][3];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let maxPrev = 0;

      // i-1행에서 j가 아닌 다른 열의 최댓값 찾기
      for (let k = 0; k < m; k++) {
        if (k !== j) {
          // j번 열이 아니면
          maxPrev = Math.max(maxPrev, dp[i - 1][k]);
        }
      }

      dp[i][j] = maxPrev + land[i][j];
    }
  }

  return Math.max(...dp[n - 1]);
}

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

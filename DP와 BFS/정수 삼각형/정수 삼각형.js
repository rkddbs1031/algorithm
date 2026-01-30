/**
 * ## 해결 전략
 * - 알고리즘: 2차원 dp로 풀기
 *
 * - 핵심 아이디어:
 *  - 위에서 아래로 내려가면서 대각선 위치가 있는지 확인하고, 각 위치까지의 최대 합을 저장
 *  - 현재 위치  = 대각선 위치(최대값 저장되어있음) + 현재 값(triangle)
 *
 * - 동작 원리:
 *  - 1. 삼각형 모양으로 2차원 배열 생성
 *    - dp[i][j] : i는 층, j는 그 층의 위치(몇번째 칸인지)
 *  - 2. 위층 대각선 경계처리
 *    - 위층 왼쪽이 0보다 작다면 존재하지 않음
 *    - 위층 오른쪽이 i보다 크다면 존재하지 않음
 *
 * - 점화식:
 *    dp[i][j] = triangle[i][j] + Math.max(
 *       dp[i-1][j-1],  // 왼쪽 위에서
 *       dp[i-1][j]     // 바로 위에서
 *    )
 * - 시간복잡도: O(n²)
 *    - n개 층, 각 층마다 최대 n개 → O(1+2+3+...+n) = O(n²)
 * - 공간복잡도: O(n²)
 *    - 삼각형 모양 DP 배열
 *
 */

function solution(triangle) {
  const n = triangle.length;
  const dp = Array.from({ length: n }, (_, i) => new Array(i + 1).fill(0)); // 삼각형 모양의 dp
  dp[0][0] = triangle[0][0];

  // i는 층, j는 그 층의 위치
  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      // j <= i인 이유는 0층에서는 1개, 1층에서는 2개, ... 이렇게 있기 때문!
      // const m = dp[i].length 로 해도 되긴함!

      // j-1 < 0 거나  j > i면 그 위치 없는 것임!
      let topLeft = 0;
      let topRight = 0;

      // 위층 왼쪽 있으면
      if (j - 1 >= 0) {
        topLeft = dp[i - 1][j - 1];
      }

      // 위층 오른쪽 있으면
      if (i > j) {
        topRight = dp[i - 1][j];
      }

      dp[i][j] = triangle[i][j] + Math.max(topLeft, topRight);
    }
  }

  return Math.max(...dp[n - 1]);
}

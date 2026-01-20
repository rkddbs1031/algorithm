/**
 * ## 해결 전략
 * - 알고리즘: DP
 * - 핵심 아이디어:
 *  - dp[i] = i번 위치까지 도달하는 최소 비용 저장
 *  - i번 위치는 (i-1)번 또는 (i-2)번에서 올 수 있음
 * - 점화식 : dp[i] = min(dp[i-1]+ cost[i-1], dp[i-2] + cost[i-2])
 * - 시간 복잡도: O(n)
 * - 공간 복잡도: O(n)
 */

function solution(cost) {
  const n = cost.length;
  const dp = new Array(n + 1).fill(Infinity);

  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp[n];
}

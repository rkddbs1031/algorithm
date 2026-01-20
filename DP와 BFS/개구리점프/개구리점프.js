/**
 * ## 해결 전략
 * - 알고리즘: DP
 * - 핵심 아이디어:
 *  - dp[i] = i번 돌까지 도달하는데 사용한 최소 에너지 // 총 높이가 아닌, i까지 오르고/내리기 위해 사용된 에너지 합
 *  - i번 돌은 (i-1)번 또는 (i-2)번에서 올 수 있음
 *  - 에너지 = 두 돌의 높이 차이의 절댓값
 * - 점화식:
 *  - dp[i] = min(
 *     dp[i-1] + |heights[i] - heights[i-1]|,  // 1칸 점프
 *     dp[i-2] + |heights[i] - heights[i-2]|   // 2칸 점프
 *   )
 * - 초기값: dp[0] = 0 (시작점, 에너지 소모 없음)
 * - 시간 복잡도: O(n)
 * - 공간 복잡도: O(n)
 */

function solution(heights) {
  const n = heights.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    /**
     * i번 돌에 오는 방법
     * i-1에서 오거나,
     * i-2에서 오거나. = i가 2이상일 경우
     *
     * 따라서 일단 높이의 차 절댓값을 구하고, dp[i-1] Or dp[i-2] 랑 더한것을 저장할건데,
     * 그 중에서 최소값을 구해야함.
     *
     */

    dp[i] = dp[i - 1] + Math.abs(heights[i] - heights[i - 1]);

    if (i >= 2) {
      dp[i] = Math.min(
        dp[i],
        dp[i - 2] + Math.abs(heights[i] - heights[i - 2])
      );
    }
  }

  return dp[n - 1];
}

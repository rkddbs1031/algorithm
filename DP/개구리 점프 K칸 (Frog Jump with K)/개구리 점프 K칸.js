/**
 * ## 해결 전략
 * - 알고리즘: DP (Dynamic Programming)
 * - 핵심 아이디어:
 *   - dp[i] = i번 돌까지 가는 최소 에너지
 *   - i번 돌은 (i-1), (i-2), ..., (i-k)번에서 올 수 있음
 *   - 에너지 = 두 돌의 높이 차이의 절댓값
 *
 * - 점화식:
 *   for (let jump = 1; jump <= k; jump++) {
 *     dp[i] = min(
 *       dp[i],
 *       dp[i-jump] + |heights[i] - heights[i-jump]|
 *     )
 *   }
 *
 * - 초기값:
 *   - dp[0] = 0 (시작점, 에너지 소모 없음)
 *   - 나머지는 Infinity로 초기화
 *
 * - 시간 복잡도: O(n × k)
 * - 공간 복잡도: O(n)
 */

function solution(heights, k) {
  const n = heights.length;
  const dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < n; i++) {
    for (let jump = 1; jump <= k; jump++) {
      if (jump <= i) {
        const energy = Math.abs(heights[i] - heights[i - jump]);
        dp[i] = Math.min(dp[i], dp[i - jump] + energy);
      }
    }
  }

  return dp[n - 1];
}

/**
 * 직접 해석해보기
 * k = 2, heights = [10, 30, 40, 20]
 * - 1칸 또는 2칸 점프 가능
 *
 * dp[0] = 0 (시작점)
 *
 * 1번째 돌 (i=1, 높이 30)
 * - 1칸 점프: 0번에서 → dp[0] + |heights[1] - heights[0]|
 *                     = 0 + |30-10| = 20
 * - 2칸 점프: 불가능 (음수 인덱스)
 * → dp[1] = 20
 *
 * 2번째 돌 (i=2, 높이 40)
 * - 1칸 점프: 1번에서 → dp[1] + |heights[2] - heights[1]|
 *                     = 20 + |40-30| = 30
 * - 2칸 점프: 0번에서 → dp[0] + |heights[2] - heights[0]|
 *                     = 0 + |40-10| = 30
 * → dp[2] = min(30, 30) = 30
 *
 * 3번째 돌 (i=3, 높이 20)
 * - 1칸 점프: 2번에서 → dp[2] + |heights[3] - heights[2]|
 *                     = 30 + |20-40| = 50
 * - 2칸 점프: 1번에서 → dp[1] + |heights[3] - heights[1]|
 *                     = 20 + |20-30| = 30 ✓
 * → dp[3] = min(50, 30) = 30
 *
 * 답: dp[3] = 30
 */

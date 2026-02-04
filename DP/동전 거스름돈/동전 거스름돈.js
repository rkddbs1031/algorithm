/**
 * ## 해결 전략
 * - 알고리즘: DP
 * - 핵심 아이디어:
 *  - dp[i] = i원을 만드는 데 필요한 최소 동전 개수
 *  - 각 금액마다 모든 동전을 시도하여 최솟값 찾기
 *  - 동전은 무한히 사용 가능 (같은 동전 여러 번 사용 가능)
 *  - i원을 만들려면 (i - coin)원 + 해당 동전 1개
 *
 * - 점화식:
 *  for (let coin of coins) {
 *     dp[i] = min(
 *       dp[i],              // 기존 최솟값
 *       dp[i-coin] + 1      // (i-coin)원 + 동전 1개
 *     )
 *   }
 *
 * - 초기값:
 *   - dp[0] = 0 (0원은 동전 불필요)
 *   - 나머지는 Infinity로 초기화
 *
 * - 불가능한 경우: dp[amount] === Infinity이면 -1 반환
 *
 * - 시간 복잡도: O(amount × coins.length)
 * - 공간 복잡도: O(amount)
 */

function solution(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

/**
 * 직접 해석해보기
 * coins [1,2,5]
 * 0원을 만들기 위해서는?
 * - 0 => 동전 필요 없음
 * 1원을 만들기 위해서는?
 * - 1원 => dp[0] + 1(1원짜리 한개) => 1개 필요
 * - 2원 => 불가능
 * - 5원 불가능
 * -> dp[1] = 1
 * 2원을 만들기 위해서는?
 * - 1원 => dp[1] + 1 => 2
 * - 2원 => dp[0] + 1 => 1개 필요
 * - 5원 =>  불가능
 * -> 즉 dp[2] = 1
 * 3원을 만들기 위해서는?
 * - 1원 => dp[2] + 1 =>  1 + 1 => 2개
 * - 2원 => dp[1] + 1개(2원 짜리) => 2개
 * - 5원 => 불가능
 * -> dp[3] => 2
 * 4원을 만들기 위해서는?
 * - 1원 =>  dp[3] + 1 => 2+ 1 => 3
 * - 2원 => d[2] + 1(2원짜리) => 1+ 1 => 2
 * - 5원 => 불가능
 * -> dp[4] => 2
 * 5원을 만들기 위해서는?
 * - 1원 => dp[4] + 1 => 2 + 1 => 3
 * - 2원 => dp[3] + 1(2원짜리) => 2 + 1 => 3
 * - 5원 => 1 => 1
 * -> dp[5] => 1
 * ...
 * for (let coin of coins){
 *  dp[i] => min(
 *    dp[i-coin]+1, dp[i-coin]+1, dp[i-coin]+1, ...
 *  )
 * }
 *
 * )
 */

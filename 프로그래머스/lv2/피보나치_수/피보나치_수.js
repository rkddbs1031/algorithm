/**
 *
 * ## 문제풀이
 * 피보나치 수열은  F(n) = F(n-1) + F(n-2) 가 적용되는 수!
 * dp[0]을 0, dp[1]을 1로 셋팅하고 for문 진행
 *
 *
 */
function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }

  return dp[n];
}

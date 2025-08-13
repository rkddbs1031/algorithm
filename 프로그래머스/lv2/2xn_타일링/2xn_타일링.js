/**
 * ## 문제풀이
 * 이 문제도 피보나치 수열 문제!
 * 1 => 1개
 * 2 => 2게
 * 3 => 3개
 * 4 => 5개
 * ...
 * n => n-1 + n-2
 */

function solution(n) {
  const dp = new Array(n + 1).fill(0);

  if (n === 1) return 1;
  if (n === 2) return 2;

  const MOD = 1000000007;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }
  return dp[n];
}

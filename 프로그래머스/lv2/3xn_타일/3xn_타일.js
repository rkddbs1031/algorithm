/**
 *
 * 홀수일때는 전부 채울 수 없기 때문에 n이 홀수라면 0 return
 * 짝수일때s
 *
 * n
 * 0 0
 * 2 3
 * 4 11...
 */
function solution(n) {
  if (n % 2 !== 0) return 0;

  const MOD = 1000000007;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[2] = 3;

  for (let i = 4; i <= n; i += 2) {
    dp[i] = dp[i - 2] * 3 + 2;

    for (let j = 2; j <= i - 4; j += 2) {
      dp[i] += dp[j] * 2;
    }

    dp[i] = dp[i] % MOD;
  }

  return dp[n];
}

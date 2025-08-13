/**
 * 피보나치 수열!
 * - 숫자를 하나씩 직접 세 보면서 점화식을 찾는 과정에서 알 수 있음
 * dp[1] = 1;
 * dp[2] = 2;
 * dp[3] = 3;
 * dp[4] = 5
 * ...
 * dp[n] = dp[n-1] + dp[n-2]
 */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input);

function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
  }

  return dp[n];
}

console.log(solution(n));

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = Number(input);

const solution = (n) => {
  if (n === 0) return '0';
  if (n === 1 || n === 2) return '1';

  const dp = new Array(n + 1).fill(BigInt(0));
  dp[1] = BigInt(1);
  dp[2] = BigInt(1);

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n].toString();
};

console.log(solution(n));

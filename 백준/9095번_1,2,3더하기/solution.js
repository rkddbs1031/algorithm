const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const numbers = input.slice(1).map(Number);
const max = Math.max(...numbers);

const dp = Array.from({ length: max + 1 }).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < numbers.length; i++) {
  console.log(dp[numbers[i]]);
}

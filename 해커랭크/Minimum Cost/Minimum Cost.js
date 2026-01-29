// cost = [1,2,3,4]
// k =2;
// dp = new Array(cost.length + 1).fill(Infinity)
// dp[0] = 0 // 초기화
// 1번까지 점프 최소 구하기
// 1. 1번 점프 => 0(바닥에서)~ 1번(cost[0]) => dp[0] + cost[0] => 1
// 2. 2번 점프 =>  불가능 !
// = dp[1] = 1

// 2번까지 점프 최소 구하기
// 1. 1번 점프 => (1에서 2번까지) => dp[1] + cost[1] => 1+ 2 => 3
// 2. 2번 점프 => (0바닥에서 2번까지) =>dp[0] + cost[1] => 2 => 2
// = dp[2] = 2

function getMinimumCost(cost, k) {
  const n = cost.length;
  const dp = new Array(n + 1).fill(Infinity); // 0(바닥) 1 2 3 4
  dp[0] = 0; // 바닥

  for (let i = 1; i <= n; i++) {
    for (let jump = 1; jump <= k; jump++) {
      if (i - jump >= 0) {
        dp[i] = Math.min(dp[i], dp[i - jump] + cost[i - 1]);
      }
    }
  }

  return dp[n];
}

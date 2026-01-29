function solution(pnl, k) {
  let maxProfit = 0;

  for (let i = 0; i < pnl.length; i++) {
    let sum = 0;

    for (let j = i; j < Math.min(i + k, pnl.length); j++) {
      sum += pnl[j];
      maxProfit = Math.max(sum, maxProfit);
    }
  }

  return maxProfit;
}

// pnl = [4, 3, -2, 9, -4, 2, 7], k = 6
// pnl.length = 7 k = 6
// 0~ k 0 ~ 6
// 1~ k+1 => 1 ~ 7
// 2~ k+2 => 2 ~ 8 => 2 ~ 7 => pnl.length가 7 이므로
// 즉 Math.min(k+i , pnl.length)

/**
 *
 * i = 0;
 *  j = 0 => sum = 4 maxProfit 4
 *  j = 1 => sum = 4 + 3 = 7 maxProfit 7
 *  j = 2 => sum = 4 + 3 + -2 = 5  maxProfit 7
 *  j = 3 => sum = 5 + 9 = 14 maxProfit 14
 *  j = 4 => sum = 14 - 4 = 10 maxProfit 14
 *  j = 5 => sum = 10 + 2 = 12 maxProfit 14
 *
 * i = 1;
 *  j = 1 => sum = 3 maxProfit 14
 *  j = 2 => sum = 3 - 2 = 1 maxProfit 14
 *  j = 3 => sum = 1 + 9 = 10 maxProfit 14
 *  j = 4 => sum = 10 - 4 = 6 maxProfit 14
 *  j = 5 => sum = 6 + 2 = 8 maxProfit 14
 *  j = 6 => sum = 8 + 7 = 15 maxProfit 15!!
 *
 * i = 2
 * j = 2
 * j = 3
 * j = 4
 * j = 5
 * j = 6
 */

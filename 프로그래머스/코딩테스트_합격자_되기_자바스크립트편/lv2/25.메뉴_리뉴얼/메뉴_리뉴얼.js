// n개로 조합한 모든 수를 구하는 함수 // ex: n =2 => AB, AC, AD, AE...
function getCombinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1); // idx+1부터 끝까지.
    const combis = getCombinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
}

function solution(orders, course) {
  const answer = [];

  for (const c of course) {
    const menu = [];

    for (const order of orders) {
      const orderArr = order.split('').sort();
      const comb = getCombinations(orderArr, c);
      menu.push(...comb); // 2차원 배열이 됨.
    }

    const counter = {}; // 조합별로 몇 번 주문되었는지
    for (const m of menu) {
      const key = m.join('');
      counter[key] = (counter[key] || 0) + 1;
    }

    const max = Math.max(...Object.values(counter));
    if (max > 1) {
      for (const [key, value] of Object.entries(counter)) {
        if (value === max) {
          console.log(key, value);
          answer.push(key);
        }
      }
    }
  }

  return answer.sort();
}

/*
조합하는 함수 다시 파악해볼것!!
*/

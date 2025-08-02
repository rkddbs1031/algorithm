/**
 *
 * ## 문제풀이
 * 1. 종류별로 몇개 있는지 개수 세기 => countMap
 * 2. k개수만큼 담으며 종류를 최소화해야하기 때문에 countMap을 내림차순으로 정렬 => counts
 * 3. counts를 하나씩 탐색하며 해당 값 즉 귤의 개수를 total에 더함을 반복하며, types + 1
 * 4. total 값이 k 이상이 되면 즉시 종료하고 types를 return한다.
 * - total이 k이상이면 이라고 하는 이유는 예를 들어 k가 2이고, 크기 1을 가지는 귤의 개수가 4개 있으며 해당 개수가 가장 개수가 많은 값이라고 가정한다면
 * total은 4가되고, 해당 귤로 상자에 k만큼 담을 수 있다라는 뜻! 즉 귤 종류를 1가지로 가지고 k만큼 즉 2개를 담을 수 있기 때문에 이것이 귤 종류의 최솟값!
 *
 */

function solution(k, tangerine) {
  const countMap = {};
  for (let t of tangerine) countMap[t] = (countMap[t] || 0) + 1;

  const counts = Object.values(countMap).sort((a, b) => b - a);

  let total = 0;
  let types = 0;

  for (let count of counts) {
    total += count;
    types++;
    if (total >= k) break;
  }

  return types;
}

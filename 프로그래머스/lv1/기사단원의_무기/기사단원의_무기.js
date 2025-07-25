/**
 *
 * ## 문제 풀이
 * 1. 각 num별로 약수의 개수를 구한다. (getDivisorCount 함수)
 * - sqrt로 제곱근까지 돌리며 계산한다.
 * - n이 9라고 가정할 때 3까지 돌고 1은 9와 묶이므로 +2, 3은 3,3으로 중복될 수 없으므로 + 1
 *
 * 2. 그 약수의 개수가 limit을 넘어가면 power로 대체하여 수 더하기
 *
 */

function getDivisorCount(n) {
  let count = 0;
  const sqrt = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      count += i === n / i ? 1 : 2;
    }
  }

  return count;
}

function solution(number, limit, power) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    const divCount = getDivisorCount(i);
    total += divCount > limit ? power : divCount;
  }

  return total;
}

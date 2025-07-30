/**
 * ## 문제 풀이
 * 1. n.toString(3) => 3진법 변환
 * 2. split('').reverse().join('') => 3진법 변환한 수 앞뒤 반전하기 위해 split 후 reverse하고 join
 * 3. parseInt(3진법 앞뒤 변환한 수, 3) =>  10진법으로 변환
 *
 */

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

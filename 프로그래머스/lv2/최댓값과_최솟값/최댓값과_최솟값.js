/**
 * ## 문제 풀이
 * - 큰수 * 큰수 => 최솟값을 구할 수 없음 !
 * - 작은수 * 큰수 => 최솟값 구할 수 있음 ⭕️
 *
 * 1. A 오름차순으로 정렬, B 내림차순으로 정렬하여 작은수 * 큰수 할 수 있도록 함.
 * 2. reduce를 통해 두 수를 곱한 합계 return
 */

function solution(s) {
  const numArr = s.split(' ').map(Number);
  return `${Math.min(...numArr)} ${Math.max(...numArr)}`;
}

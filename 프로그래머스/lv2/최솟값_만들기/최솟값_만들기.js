/**
 * ## 문제 풀이
 * - 큰수 * 큰수 => 최솟값을 구할 수 없음 !
 * - 작은수 * 큰수 => 최솟값 구할 수 있음 ⭕️
 *
 * 1. A 오름차순으로 정렬, B 내림차순으로 정렬하여 작은수 * 큰수 할 수 있도록 함.
 * 2. reduce를 통해 두 수를 곱한 합계 return
 */

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);

  return A.reduce((sum, a, i) => sum + a * B[i], 0);
}

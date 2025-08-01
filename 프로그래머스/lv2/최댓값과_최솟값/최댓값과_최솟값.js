/**
 * ## 문제 풀이
 * 1. 문자열 중에 공백 제거하고 숫자로 변환
 * 2. Math.min()과 Math.max() 활용하여 최솟값과 최댓값 출력
 */

function solution(s) {
  const numArr = s.split(' ').map(Number);
  return `${Math.min(...numArr)} ${Math.max(...numArr)}`;
}

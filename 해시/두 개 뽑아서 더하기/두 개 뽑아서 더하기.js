/**
 *
 * ## 해결 전략
 * - 알고리즘: 2중 반복문 + Set (중복 제거)
 *
 * - 핵심 아이디어:
 *  - 서로 다른 인덱스의 모든 쌍 확인
 *  - 두 수의 합을 Set에 저장(자동 중복 제거)
 *  - Set을 배열로 변환 후 오름 차순 정렬
 *
 *
 */

function solution(numbers) {
  const numSet = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      numSet.add(numbers[i] + numbers[j]);
    }
  }

  return Array.from(numSet).sort((a, b) => a - b);
}

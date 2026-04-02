/**
 * ## 해결 전략
 * - 알고리즘: 배열 슬라이싱
 *
 * - 핵심 아이디어:
 *   - 오른쪽 k칸 회전 = 뒤에서 k개를 앞으로 이동
 *   - slice 활용하여 원본 유지
 *   - k % arr.length로 실제 회전 수 계산 (k가 배열 길이보다 클 때)
 *   - slice로 배열을 두 부분으로 나누고 순서 바꿔 합치기
 *
 * - 동작 과정:
 *   1. k = k % arr.length (실제 회전 수)
 *   2. 뒤 k개: arr.slice(-k)
 *   3. 앞 나머지: arr.slice(0, -k)
 *   4. 합치기: [...뒤, ...앞]
 *
 * - 시간 복잡도: O(n)
 *   - slice 두 번 + 배열 합치기
 *
 * - 공간 복잡도: O(n)
 *   - 새 배열 생성
 */

function solution(arr, k) {
  if (k === 0) return arr;

  k = k % arr.length;

  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

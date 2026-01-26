/**
 * ## 해결 전략
 * - 알고리즘: 해시맵 (객체 활용)
 *
 * - 핵심 아이디어:
 *   - 문자열의 각 문자가 몇 번 나왔는지 카운트
 *   - 객체로 빈도를 저장 (key: 문자, value: 횟수)
 *   - 가장 큰 빈도 값을 반환
 *
 * - 동작 방식:
 *   1. 빈 객체 생성
 *   2. 문자열 순회하면서 각 문자의 빈도 카운트
 *      - 공백은 제외 (continue)
 *      - strObj[char] = (strObj[char] || 0) + 1
 *   3. 객체의 모든 value 중 최댓값 찾기
 *      - Math.max(...Object.values(strObj))
 *
 * - 시간 복잡도: O(n)
 *   - 문자열 순회: O(n)
 *   - Object.values(): O(k) (k = 고유 문자 수, 최대 26)
 *   - Math.max(): O(k)
 *   - 총 O(n)
 *
 * - 공간 복잡도: O(k)
 *   - k = 고유 문자 수 (최대 26개 - 알파벳)
 */

function solution(s) {
  const strObj = {};

  for (let string of s) {
    if (string === ' ') continue; // 공백 제외
    strObj[string] = (strObj[string] || 0) + 1;
  }

  return Math.max(...Object.values(strObj));
}

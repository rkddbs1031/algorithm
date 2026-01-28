/**
 * ## 해결 전략
 * - 알고리즘: 문자열 순회 / 구현
 *
 * - 핵심 아이디어:
 *   - 현재 문자와 다음 문자를 비교
 *   - 같으면 count 증가
 *   - 다르면 결과에 추가하고 count 초기화
 *
 * - 동작 과정:
 *   1. count = 1로 시작
 *   2. s[i] === s[i+1] 비교:
 *      - 같으면: count++
 *      - 다르면: (count > 1이면 count + 문자, 아니면 문자만) 추가
 *   3. count = 1로 초기화
 *
 * - 시간 복잡도: O(n)
 *   - 문자열을 한 번만 순회
 *
 * - 공간 복잡도: O(n)
 *   - 결과 문자열 저장
 */

function solution(s) {
  let answer = '';
  let count = 1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      answer += (count > 1 ? count : '') + s[i];

      count = 1; // 초기화
    }
  }

  return answer;
}

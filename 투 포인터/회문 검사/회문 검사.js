/**
 * ## 해결 전략
 * - 알고리즘: 투 포인터 (reverse로 풀 수는 있지만 투포인터로 해보기!)
 *
 * - 핵심 아이디어:
 *  - 문자열 양 끝에서 시작해서 중앙으로 이동
 *  - 알파벳/숫자만 비교 (공백, 특수문자 건너뛰기)
 *  - 대소문자 구분 없이 비교
 *
 * - 동작 과정:
 *   1. start = 0 (처음), end = 마지막 인덱스
 *   2. start 위치가 알파벳/숫자 아니면 start++
 *   3. end 위치가 알파벳/숫자 아니면 end--
 *   4. 유효한 문자끼리 비교 (소문자로 변환)
 *      - 다르면: false 반환
 *      - 같으면: start++, end-- 계속
 *   5. start >= end면 종료 → true
 *
 * - isAlphaNumeric 함수:
 *   - 정규식 /[a-z0-9]/i 사용
 *   - i 플래그: 대소문자 구분 없음
 *   - 알파벳 또는 숫자면 true
 *
 * - 시간 복잡도: O(n)
 *   - 각 포인터가 최대 n번 이동
 *   - 한 번의 순회로 판별
 *
 * - 공간 복잡도: O(1)
 *   - 추가 공간 불필요 (포인터만 사용)
 *   - 원본 문자열 그대로 사용
 *
 */

function solution(s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    /**
     * 1. 왼쪽 알파벳/숫자 아니면 건너뛰기
     * 2. 오른쪽 알파벳/숫자 아니면 건너뛰기
     */
    while (start < end && !isAlphaNumeric(s[start])) {
      start++;
    }

    while (start < end && !isAlphaNumeric(s[end])) {
      end--;
    }

    if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

function isAlphaNumeric(char) {
  return /[a-z0-9]/i.test(char);
}

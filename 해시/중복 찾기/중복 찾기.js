/**
 * ## 해결 전략
 * - 알고리즘: 해시 자료구조 (Set)
 *
 * - 핵심 아이디어:
 *   - 배열을 순회하면서 각 숫자가 있는지 확인
 *   - setObj에 없다면 그대로 저장.
 *   - 있다면 이미 본 값이 저장되어 있는 것이기 때문에 -> 중복!! 즉 true !
 *   - Set은 중복을 허용하지 않는 자료구조
 *
 * - 동작 방식:
 *   1. 빈 Set 생성
 *   2. 배열의 각 숫자 확인
 *   3. Set에 있는지 체크 (O(1))
 *      - 있으면: true 반환 (중복 발견!)
 *      - 없으면: Set에 추가하고 계속
 *   4. 끝까지 가면: false 반환 (중복 없음)
 *
 * - 시간 복잡도: O(n)
 *   - 배열을 한 번만 순회
 *   - Set의 has, add 연산은 O(1)
 *
 * - 공간 복잡도: O(n)
 *   - 최악의 경우 모든 숫자를 Set에 저장
 */

function solution(nums) {
  const setObj = new Set();

  for (let num of nums) {
    if (setObj.has(num)) return true;
    setObj.add(num);
  }

  return false;
}

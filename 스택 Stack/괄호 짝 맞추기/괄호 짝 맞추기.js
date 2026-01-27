/**
 * ## 해결 전략
 * - 알고리즘: 스택 활용
 *
 * - 핵심 아이디어:
 *   - 여는 괄호 (, {, [ → Stack에 push
 *   - 닫는 괄호 ), }, ] → Stack에서 pop하여 짝 확인
 *   - 모든 괄호 처리 후 Stack이 비어있어야 올바른 괄호
 *
 * - 동작 과정:
 *   1. 빈 Stack 생성
 *   2. 문자열 순회:
 *      - 여는 괄호면: Stack에 push
 *      - 닫는 괄호면:
 *        a. Stack이 비어있으면 false (짝 없음)
 *        b. Stack 맨 위와 짝이 맞는지 확인
 *        c. 맞으면 pop, 안 맞으면 false
 *   3. 순회 끝난 후 Stack이 비어있으면 true
 *
 * - pairs 객체:
 *   - 여는 괄호 → 닫는 괄호 매핑
 *   - '(': ')', '{': '}', '[': ']'
 *   - Stack 맨 위의 여는 괄호와 현재 닫는 괄호 비교
 *
 * - 시간 복잡도: O(n)
 *   - 문자열을 한 번만 순회
 *   - Stack의 push/pop은 O(1)
 *
 * - 공간 복잡도: O(n)
 *   - 최악의 경우 모든 괄호가 여는 괄호
 *   - Stack에 n개 저장
 */
function solution(s) {
  const stack = [];

  const pairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
      if (stack.length > 0 && pairs[stack[stack.length - 1]] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

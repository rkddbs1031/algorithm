/**
 *
 * ## 문제 풀이
 * 1. s 길이가 홀수인 경우는 바로 0으로 return
 * 2. 횐전한 문자열의 괄호가 짝이 맞는 경우 카운팅할 수 있게 count 선언
 * 3. rotated로 회전한 문자열 저장
 * 4. 제공되는 s문자열의 인덱스를 하나씩 조회하여 첫번째 문자를 제거하고 마지막에 조합하여 새로운 (roated) 문자 생성
 * 5. 해당 문자로 괄호 짝이 맞는지 체크 (isValid)
 * - 열린 괄호일 때 바로 stack에 push
 * - 닫힌 괄호일 때 stack 맨 위 즉, 맨 마지막에 쌓인 문자를 pairs에 비교했을 때 맞지 않다면 올바른 괄호 닫힘이 아닌것으로 체크!
 *
 *
 */

function isValid(str) {
  const stack = [];
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (let ch of str) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.pop() !== pairs[ch]) return false;
    }
  }

  return stack.length === 0;
}

function solution(s) {
  if (s.length % 2 === 1) return 0; // 길이가 홀수인 경우 불가

  let rotated = s;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      if (isValid(rotated)) count++;
    } else {
      rotated = rotated.slice(1) + s[i - 1];
      if (isValid(rotated)) count++;
    }
  }

  return count;
}

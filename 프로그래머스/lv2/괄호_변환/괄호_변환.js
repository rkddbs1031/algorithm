/*
1. 입력이 빈 문자열인 경우, 빈 문자열을 반환
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있음
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행
  3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행한다.
  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙인다.
  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙인다.
  4-3. ')'를 다시 붙인다.
  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙인다.
  4-5. 생성된 문자열을 반환
  */

// 분리 함수
const seperate = (p) => {
  let balance = 0;
  let u = '',
    v = '';

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') balance++;
    else balance--;

    u += p[i];

    if (balance === 0) {
      v = p.slice(i + 1);
      break; // 균형잡힌 괄호 문자열!
    }
  }

  return [u, v];
};

const isCorrect = (u) => {
  const stack = [];

  for (let ch of u) {
    if (ch === '(') {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
};

function solution(p) {
  if (p === '') return p; // 1

  const [u, v] = seperate(p); // 2

  if (isCorrect(u)) {
    return u + solution(v); // 3
  } else {
    // 새로운 문자열
    let str = '('; // 4-1
    str += solution(v); // 4-2
    str += ')'; // 4-3

    let flipped = '';
    // 4-4
    // 앞 뒤 문자를 제거한다는 것은 -> 인덱스 1에서부터 u.length - 2 인덱스까지 조회한다는 뜻!
    for (let i = 1; i < u.length - 1; i++) {
      flipped += u[i] === '(' ? ')' : '(';
    }

    str += flipped;

    return str;
  }
}

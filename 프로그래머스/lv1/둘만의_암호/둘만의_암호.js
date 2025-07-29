/**
 *
 * ## 문제풀이
 * 1. 스킵하지 않아도 되는 유효한 알파벳 문자만 담은 배열 선언
 * - skip과 편하게 비교하기 위해 alphabetSet (Set)으로
 * 2. viaildAlphabet에서 index에 맞는 문자 추출 후 z이후부터는 다시 a로 돌아와야하기 때문에 newIdx 선언
 *
 */

function solution(s, skip, index) {
  const alphabetSet = new Set(skip);
  const viaildAlphabet = [];

  for (let i = 0; i < 26; i++) {
    const ch = String.fromCharCode(97 + i); // 소문자 a부터 시작
    if (!alphabetSet.has(ch)) viaildAlphabet.push(ch);
  }

  return [...s]
    .map((str) => {
      const curIdx = viaildAlphabet.indexOf(str);
      const newIdx = (curIdx + index) % viaildAlphabet.length;
      return viaildAlphabet[newIdx];
    })
    .join('');
}

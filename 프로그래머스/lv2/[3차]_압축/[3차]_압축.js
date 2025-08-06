/**
 * ## 문제풀이
 * 1. 기본 단어 색인번호 저장 (dictionaryObj)
 * - 아스키 코드 활용하여 키-값 쌍으로 저장
 * 2. msg를 자르지 않고, 시작점과 끝점 인덱스를 변형하며 조회하면서 찾을것.
 * - dictionaryObj[msg.slice(i, j)]으로 사전에 있으면 w를 해당 값으로 업데이트하고, 끝점 j를 +1한다.
 * - 사전에 없어서 2번째 while문을 종료하면 이전 w가 사전에서 현재 입력과 일치하는 가장 긴 문자열!
 * 3. w의 색인번호를 result에 push하고, w + 그 다음 문자를 조합한 문자를 사전에 추가한다.
 */

function solution(msg) {
  const dictionaryObj = {};
  for (let i = 0; i < 26; i++) {
    const key = String.fromCharCode(i + 65);
    dictionaryObj[key] = i + 1;
  }

  const result = [];
  let lastIdx = 26;
  let i = 0;

  while (i < msg.length) {
    let w = msg[i]; // 사전에 있는 가장 긴 문자열 // 즉 길이가 길어지는 문자열
    let j = i + 1; // 단순히 끝지점

    // 사전에 있으면 종료! 즉 마지막 w가 가장 긴 문자
    // 사전에 있는지 체크
    while (j <= msg.length && dictionaryObj[msg.slice(i, j)]) {
      w = msg.slice(i, j);
      j++;
    }

    result.push(dictionaryObj[w]); // 색인 번호 출력

    if (j <= msg.length) {
      dictionaryObj[w + msg[j - 1]] = ++lastIdx;
    }

    i += w.length;
  }

  return result;
}

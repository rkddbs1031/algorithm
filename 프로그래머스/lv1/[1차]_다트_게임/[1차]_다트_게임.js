/**
 * ## 문제 풀이
 * 1. numStr에 문자열 S, D, T, *, #이 아닌 문자의 경우(!isNaN) 누적해서 저장
 * 2. 보너스에 해당하는 문자인 경우
 * - 누적된 점수인 numStr 점수 제곱 계산하여 scores에 저장
 * - numStr 초기화 필요!!
 * 3. 옵션에 해당하는 문자인 경우
 * - '*' :  점수 저장되어 있는 scores 중 알맞게 선택하여 2배로 다시 저장.
 * - '#' : 점수 저장되어 있는 scores 중 알맞게 선택하여 해당 점수를 -해야하기 때문에 -1 곱하고 저장.
 * 4. 저장되어있는 계산된 점수 scores 배열의 합계를 return
 */

function solution(dartResult) {
  const scores = [];
  const bonus = new Set(['S', 'D', 'T']);
  let numStr = '';

  for (let i = 0; i < dartResult.length; i++) {
    const ch = dartResult[i];

    if (!isNaN(dartResult[i])) {
      // 숫자인 경우
      numStr += ch;
    } else if (bonus.has(ch)) {
      let score = Number(numStr);
      numStr = ''; // numStr초기화

      if (ch === 'D') score **= 2;
      else if (ch === 'T') score **= 3;

      scores.push(score);
    } else if (ch === '*') {
      // 스타상
      const lastScoreIdx = scores.length - 1;
      scores[lastScoreIdx] *= 2;
      if (lastScoreIdx > 0) scores[lastScoreIdx - 1] *= 2;
    } else if (ch === '#') {
      scores[scores.length - 1] *= -1;
    }
  }

  return scores.reduce((acc, cur) => acc + cur, 0);
}

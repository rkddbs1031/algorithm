/**
 * ## 문제풀이
 * 1. 반복문으로 t를 p의 길이 만큼 slice하여 문자열 추출
 * 2. 해당 문자열을 숫자타입으로 변환하여 p보다 작거나 같은지 체크하며 카운팅
 *
 */
function solution(t, p) {
  const length = p.length;
  const target = +p;
  let count = 0;

  for (let i = 0; i <= t.length - length; i++) {
    const num = t.slice(i, i + length);
    if (+num <= target) count++;
  }

  return count;
}

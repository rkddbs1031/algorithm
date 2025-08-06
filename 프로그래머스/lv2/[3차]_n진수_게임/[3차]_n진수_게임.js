/**
 * ## 문제풀이
 * 1. 0부터 n진법으로 변환한 문자열 만들기
 * - t만큼 추출해야하기 때문에 sequence의 최소 길이는 총 인원수 * 순서가 되야함.
 * 2. 자기 순서에 맞게 t번 추출하기
 * - 1번째라면 0번째 인덱스 문자를 추출해야하기 때문에 p - 1
 * - 인원수 만큼 건너뛰기 해야하기 때문에 i * m
 */

function solution(n, t, m, p) {
  let sequence = '';

  for (let i = 0; sequence.length < t * m; i++) {
    sequence += i.toString(n).toUpperCase();
  }

  let result = '';
  for (let i = 0; i < t; i++) {
    result += sequence[p - 1 + i * m];
  }

  return result;
}

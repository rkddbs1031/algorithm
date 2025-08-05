/**
 *
 * ## 문제풀이
 * 1. 원소길이만큼 합을 구하고 중복없이 해당 합의 원소 개수를 구해야하기 때문에 Set 으로 관리
 * 2. 연속된 원형 배열로 만들기 위해 concat 활용하여 배열 동일하게 붙이기
 * 3. 이중 for문으로 시작점과 끝점을 체크하여 slice로 부분 추출
 * - i는 길이, start는 시작점
 * - start + i를 하는 이유는 길이 i만큼 잘라야하기 때문에!
 * 4. reduce로 추출한 배열 합 구하기
 * 5. 해당 합을 countSet에 적용
 *
 */

function solution(elements) {
  const countSet = new Set();
  const extended = elements.concat(elements);

  for (let i = 1; i <= elements.length; i++) {
    for (let start = 0; start < elements.length; start++) {
      const sum = extended
        .slice(start, start + i)
        .reduce((sum, cur) => sum + cur, 0);
      countSet.add(sum);
    }
  }

  return countSet.size;
}

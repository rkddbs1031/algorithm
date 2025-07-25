/**
 *
 * ## 문제 풀이
 * 1. 동일한 문제 유형이 나올 수 있기 때문에 유형별로 점수 합계를 저장해야 함.
 * 2. survey와 choices를 순회하여 선택값에 따라 점수 부여
 *  - 1~3번 선택지는 비동의 → survey[i][0]에게 점수 부여 (4 - choice)
 *  - 5~7번 선택지는 동의 → survey[i][1]에게 점수 부여 (choice - 4)
 *  - 4번은 중립 → 점수 없음
 * 3. 최종적으로 4개의 지표쌍(RT, CF, JM, AN)에서 각 지표별 높은 점수를 가진 유형을 선택
 * - 동일한 점수라면 유형중 사전 순으로 빠른 성격 유형 선택
 * 4. 배열로 추출한 선택된 최종 유형을 join 하여 출력
 */

function solution(survey, choices) {
  // 유형별 점수 저장
  const scores = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < survey.length; i++) {
    const [left, right] = survey[i];
    const choice = choices[i];

    if (choice < 4) {
      scores[left] += 4 - choice;
    } else if (choice > 4) {
      scores[right] += choice - 4;
    }
  }

  const indicators = ['RT', 'CF', 'JM', 'AN']; // 해당 문자열 순서대로 뽑아야함

  return indicators
    .map(([left, right]) => (scores[left] >= scores[right] ? left : right))
    .join('');
}

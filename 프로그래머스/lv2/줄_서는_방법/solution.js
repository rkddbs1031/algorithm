/**
 * 순열 문제!
 * n이 3이라면
 * - 1그룹 : 1[2,3], [3,2] => 2개
 * - 2그룹 : 2[1,3], [3,1] => 2개
 * - ... 와 같이
 * - 3! 즉 3 * 2 * 1 => 6개 방법이 나옴
 * 즉 총 순열 수는  n! => n * n-1 * n-2 * ... 1 개
 * 그룹별 속한 순열 수는 (n-1)!개
 * k번째가 속한 그룹을 구하기 위해서는  Math.ceil((k-1) / (n-1)!)
 * - k-1을 하는 이유는 인덱스로 구하기 쉽게 (1번째 그룹을 0인덱스로 조회 등)
 *
 *
 * ## 문제 풀이
 * 1. 후보 번호 arr 초기화 선언
 * 2. 후보 번호 모두 선택해야하기 때문에 반복문으로 n만큼 돌기
 * - groupCount는 (n-1)!로 그룹별 속한 순열 개수이고 첫자리가 무엇이며 어떤 인덱스를 갖는지 구하기
 * - 첫자리 answer에 푸시하며 후보자에서 제거
 * - k를 남은 순열에서 몇 번째인지로 업데이트 해주기 (예시. 앞자리가 3이면 남은 후보자 2,1일것이고 이들중에서도 첫자리가 무엇인지 체크하고, k가 여기에서 몇 번째인건지 업데이트..반복)
 * 3. 반복문을 통해 얻은 배열 출력
 *
 */

function solution(n, k) {
  const candidates = Array.from({ length: n }, (_, i) => i + 1);
  const answer = [];
  k = k - 1; // arr 인덱스로 선택하기 쉽게

  for (let i = n; i >= 1; i--) {
    // (i - 1)!
    let groupCount = 1;
    for (let j = 1; j < i; j++) groupCount *= j;

    let index = Math.floor(k / groupCount);
    answer.push(candidates[index]);
    candidates.splice(index, 1);

    k = k % groupCount;
  }

  return answer;
}

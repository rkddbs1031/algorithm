/**
 * ## 해결 전략
 * - 알고리즘: 투 포인터
 *
 * - 핵심 아이디어:
 *  - 오름차순으로 정렬된 배열에서 두 수의 합 찾기
 *  - 양끝에서 시작해서 start, end를 늘리거나 줄이는 것으로 동작하며 target 확인
 *
 * - 동작 과정:
 *   1. start = 0 (첫 번째), end = 마지막 인덱스
 *   2. numbers[start] + numbers[end] 계산
 *   3. 합이 target과 비교:
 *      - 같으면: [start, end] 반환 (답 찾음!)
 *      - 작으면: start++ (더 큰 수 필요)
 *       -> 처음 나온 start + right의 합은 무조건 start 기준 제일 큰수가 나올 수 있는 값이기 때문에
 *       -> 그 값이 target보다 작으면 start를 키워야 함.
 *      - 크면: end-- (더 작은 수 필요)
 *   4. start >= end면 종료 (답 없음)
 *
 * - 시간 복잡도: O(n)
 *   - 각 포인터가 최대 n번 이동
 *   - 한 번의 순회로 답 찾기
 *
 * - 공간 복잡도: O(1)
 *   - 추가 공간 불필요 (포인터 2개만)*
 *
 */

function solution(numbers, target) {
  let start = 0; // 시작 점 인덱스
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];

    if (sum === target) {
      return [start, end];
    } else if (sum < target) {
      start++;
    } else {
      end--;
    }
  }

  return -1;
}

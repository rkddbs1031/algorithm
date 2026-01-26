/**
 * ## 해결 전략
 * - 알고리즘: 해시맵
 *
 * - 핵심 아이디어:
 *   - 배열을 순회하면서 각 숫자의 "짝꿍"이 이미 나왔는지 확인
 *   - 짝꿍 = target - 현재 숫자
 *   - 해시맵에 이미 본 숫자들을 저장 (key: 숫자, value: 인덱스)
 *
 * - 동작 방식:
 *  1. 현재 숫자보기
 *  2. complement = target - 현재숫자 계산 => 현재 숫자와 짝꿍
 *  3. complement가 map에 있는 지 확인
 *    - 없다면 map.set(현재 숫자, 그 숫자의 인덱스)
 *    - 있다면 답: [짝꿍 인덱스, 현재 인덱스]
 *
 * - 시간 복잡도: O(n)
 *   - 배열을 한 번만 순회
 *   - 해시맵 연산(has, get, set)은 O(1)
 *
 * - 공간 복잡도: O(n)
 *   - 최악의 경우 모든 숫자를 맵에 저장
 */

function solution(nums, target) {
  const map = new Map(); // key =  num, value = index
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
}

/**
 *
 * 해석해보기
 * 1. 두 포인트를 잡고 하나씩 풀어나가보기? => 중첩 for문으로 O(n²) 느림..
 * 2. map 이용해보기?
 *  -> complement는 현재 num에 대한 짝궁인 값을 저장한 것.
 *  -> 현재 숫자를 보면서, 짝꿍이 이미 나왔었는지 확인하는 과정 만들기
 *
 */

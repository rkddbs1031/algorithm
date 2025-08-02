/**
 *
 * ## 문제풀이
 * 1. 보트에 탈 수 있는 최대 인원은 2명이기때문에 2명의 조합은 가장 적은 무게를 가진 사람 + 가장 많은 무게를 가진 사람과의 조합!!
 * 2. people을 오름차순으로 정렬후 보트의 개수를 지칭하는 count 선언
 * 3. 가장 적은 무게를 가진 사람과 가장 무게가 많이 나가는 사람을 조회하기 위해서 인덱스 값인 left, right 선언
 * 4. while 문을 통해 left와 right를 조합하여 limit을 넘는지 체크.
 * - 여기서 limit을 넘는 사람임에도 count를 +1 하는 이유는 가장 적은 무게를 가진 사람과 조합을 했음에도
 *  limit을 넘기 때문에 조합할 수 있는 사람은 없다는 것! => 즉 이것은 혼자 보트를 탄다라는 뜻!!!
 * - left++, right--를 하며 하나씩 탐색.
 * shift와 pop을 하는 것은 성능이 좋지 않기 때문에 left,right와 같이 인덱스를 이용하여 하는 것이 성능에 크게 좋음!
 *
 */
function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    count++;
  }

  return count;
}

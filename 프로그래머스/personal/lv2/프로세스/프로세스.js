/*
1.priorities에 curPriority보다 큰게 있는 지 확인
2. 있다면 queue에 그대로 넣기
3. 없다면order +1 하고 그 데이터의 인덱스 값이 location(찾고자 하는 인덱스 값)과 동일하다면 종료
*/

function solution(priorities, location) {
  const queue = priorities.map((priority, index) => [index, priority]);
  // 가지고 있던 인덱스 값, 우선순위 값
  let order = 0;

  while (queue.length > 0) {
    const [curIndex, curPriority] = queue.shift();
    const hasHigher = queue.some(([, priority]) => priority > curPriority);

    if (hasHigher) {
      queue.push([curIndex, curPriority]);
    } else {
      order++;
      if (curIndex === location) {
        return order;
      }
    }
  }
}

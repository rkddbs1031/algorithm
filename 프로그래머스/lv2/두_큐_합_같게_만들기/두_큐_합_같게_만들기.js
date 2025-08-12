/**
 * ## 문제 풀이
 * pop/insert 그대로 구현하면 너무 느림 ㅜㅜ!
 * -> 따라서 큐 포인터 방식으로 적용해야 함
 *
 * 1. 두 큐의 합을 구하기 위해 두 배열 합하기
 * 2. total이 홀수인 경우 두 큐의 합을 같게 할 수 없으므로 바로 return -1
 * 3. 합쳐진 큐를 활용하여 포인터 준비
 * - queue1는 0 (queue1의 시작), queue2는 queue1.length(queue2의 시작)
 * 4. queue1의 초기 합계를 구하기 (q1Sum)
 * 5. while
 * - 포인터를 활용해서 queue1의 합이 target 값이 되는 순간 while문 종료 후 이동횟수 출력
 * - q1Sum < target이면 queue에 queue2의 앞 에 값을 더해야하기 때문에 q1Sum += queue[q2++];
 * - q1Sum > target이면 target보다 큰거기때문에 제거해야함! q1Sum -= queue[q1++];
 * 6. 루프 횟수가 queue1.length * 3이 넘으면 종료
 */

function solution(queue1, queue2) {
  const queue = [...queue1, ...queue2];
  const total = queue.reduce((acc, cur) => acc + cur, 0);

  if (total % 2 !== 0) return -1;

  const target = total / 2;
  let q1Sum = queue1.reduce((acc, cur) => acc + cur, 0);

  let q1 = 0;
  let q2 = queue1.length;
  let move = 0;

  while (move <= queue1.length * 3) {
    if (q1Sum === target) return move;
    if (q1Sum < target) {
      q1Sum += queue[q2++];
    } else {
      q1Sum -= queue[q1++];
    }

    move++;
  }

  return -1;
}

/*

키워드!!
- 순서를 바꿀 수 없음
- 순서대로 앞에서부터 이용 가능함
 
즉! 큐 문제로 파악해야함!

*/

// 1. shift이용
function solution1(cards1, cards2, goal) {
  let answer = "Yes";

  for (const word of goal) {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else {
      answer = "No";
    }
  }

  return answer;
}

// 2. Queue 직접 만들어서 풀어보기
class Queue {
  items = [];
  front = 0;
  rear = 0;

  constructor(array) {
    this.items = array;
    this.rear = array.length;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  first() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution2(cards1, cards2, goal) {
  cards1 = new Queue(cards1);
  cards2 = new Queue(cards2);
  goal = new Queue(goal);

  // goal의 문자열 순차적으로 순회
  while (!goal.isEmpty()) {
    if (!cards1.isEmpty() && cards1.first() === goal.first()) {
      cards1.pop();
      goal.pop();
    } else if (!cards2.isEmpty() && cards2.first() === goal.first()) {
      cards2.pop();
      goal.pop();
    } else {
      break;
    }
  }

  return goal.isEmpty() ? "Yes" : "No";
}

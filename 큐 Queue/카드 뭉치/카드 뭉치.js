function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  const cards1Length = cards1.length;
  const cards2Length = cards2.length;

  for (let word of goal) {
    if (idx1 < cards1Length && cards1[idx1] === word) {
      idx1++;
    } else if (idx2 < cards2Length && cards2[idx2] === word) {
      idx2++;
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
/**
 * 해석해보기
 * - cards의 순서는 바꿀 수 없음!
 */

/**직접 class로 Queue 구현해서 하기! */

class Queue {
  constructor(array) {
    this.items = array;
    this.front = 0;
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

  return goal.isEmpty() ? 'Yes' : 'No';
}

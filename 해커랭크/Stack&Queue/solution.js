class QueueUsingStacks {
  constructor() {
    this.stack1 = []; // 입구
    this.stack2 = []; // 출구
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    /*
      1. stack2가 비어있는지 확인, 비어있지 않으면, stack2.pop()
      2. stack2가 비어있다면 stack1을 모두 stack2로 넘긴다. 
    */
    if (this.stack2.length > 0) {
      return this.stack2.pop();
    }

    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    return this.stack2.pop();
  }
}

const queue = new QueueUsingStacks();

queue.enqueue(10); // [10]
queue.enqueue(20); // [10, 20]
queue.enqueue(30); // stack1 = [10, 20, 30], stack2 = []

console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20

queue.enqueue(40);

console.log(queue.dequeue()); // 30
console.log(queue.dequeue()); // 40

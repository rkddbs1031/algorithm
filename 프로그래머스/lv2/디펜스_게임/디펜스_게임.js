/**
 * Heap 자료구조 구현해서 진행
 * 힙은 지금까지 등장한 라운드의 적 수를 관리하여, 병사가 부족할 때 가장 많은 적 수 라운드를 무적권으로 처리하기 위해 사용함!
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChild(parentIdx) {
    return parentIdx * 2 + 2;
  }

  getParent(idx) {
    return Math.floor((idx - 1) / 2);
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while (idx > 0) {
      const parentIdx = this.getParent(idx);

      if (this.heap[parentIdx] < this.heap[idx]) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else break;
    }
  }

  pop() {
    if (this.isEmpty()) return null;
    if (this.size() === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  bubbleDown() {
    let idx = 0;

    while (this.getLeftChild(idx) < this.size()) {
      const leftChild = this.getLeftChild(idx);
      const rightChild = this.getRightChild(idx);
      let largerChild =
        rightChild < this.size() && this.heap[rightChild] > this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (this.heap[largerChild] > this.heap[idx]) {
        this.swap(largerChild, idx);
        idx = largerChild;
      } else break;
    }
  }
}

function solution(n, k, enemy) {
  const heap = new MaxHeap(); // 등장하는 적의 수를 관리할 힙
  let soldiers = n; // 남은 병사 수

  for (let round = 0; round < enemy.length; round++) {
    soldiers -= enemy[round];
    heap.push(enemy[round]);

    if (soldiers < 0) {
      // 병사 부족 + 무적권이 남아있다면
      if (k > 0) {
        const largest = heap.pop(); //
        soldiers += largest;
        k--;
      } else {
        return round;
      }
    }
  }

  return enemy.length;
}

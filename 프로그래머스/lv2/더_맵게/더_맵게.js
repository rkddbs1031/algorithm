/**
 * 힙은 완전이진트리!!!
 * ### 자식노드
 * - 왼쪽: 2 * 1 + 1;
 * - 오른쪽: 2 * 1 + 2;
 * ### 부모노드
 * - Math.floor((i - 1) / 2)
 *
 * ## 문제풀이
 * sort로 배열 정렬한 뒤 하려고 했으나 O(N log N) 시간 복잡도로 비효율,,ㅠㅠ
 *
 * 직접 minHeap 구현하는 것이 O(log N)로 효율성 보장 가능
 */

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChild(parentIdx) {
    return parentIdx * 2 + 1;
  }
  getRightChild(parentIdx) {
    return parentIdx * 2 + 2;
  }
  getParentChild(idx) {
    return Math.floor((idx - 1) / 2);
  }
  size() {
    return this.heap.length;
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.size() - 1;
    while (idx > 0) {
      let parentIdx = this.getParentChild(idx);
      if (this.heap[parentIdx] > this.heap[idx]) {
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else break;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  isEmpty() {
    return this.heap.length === 0;
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
      let leftChild = this.getLeftChild(idx);
      let rightChild = this.getRightChild(idx);
      let smallerChild =
        rightChild < this.size() && this.heap[rightChild] < this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (this.heap[smallerChild] < this.heap[idx]) {
        this.swap(smallerChild, idx);
        idx = smallerChild;
      } else break;
    }
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  for (let s of scoville) minHeap.push(s);

  let count = 0;

  while (minHeap.size() > 1 && minHeap.heap[0] < K) {
    let first = minHeap.pop();
    let second = minHeap.pop();

    let newScoville = first + second * 2;
    minHeap.push(newScoville);

    count++;
  }

  return minHeap.heap[0] >= K ? count : -1;
}

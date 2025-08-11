## 완전 이진 트리 직접 구현 코드

- 부모: Math.floor((i-1)/2)
- 왼쪽 자식: `2 * i + 1 `
- 오른쪽 자식: `2 *i + 2`

```

class MinHeap {
constructor() {
this.heap = [];
}

getLeftChild(parentIdx) {
return parentIdx _ 2 + 1;
}
getRightChild(parentIdx) {
return parentIdx _ 2 + 2;
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

```

## 힙 vs 다른 자료구조 구분법

#### 🤔 "정렬이 필요해 보이는데..."

✅ 힙 사용: 최솟값/최댓값만 계속 필요 <br>
❌ 힙 불필요: 전체 순서가 필요 <br>

<br>

✅ 힙 사용: 동적으로 삽입/삭제하면서 최솟값 추적 <br>
❌ 힙 불필요: 한번 정렬하고 끝 <br>

<br>

✅ 힙 사용: 우선순위 큐 역할 <br>
❌ 힙 불필요: FIFO/LIFO 큐/스택으로 충분<br>

/*
최소 비용을 구하는 알고리즘 즉 다익스트라 알고리즘!
Heap 힙 자료구조

1번 마을에서 출발해서 각 마을까지의 최단 시간(거리)을 구한 뒤, 
그 값이 K 이하인 마을의 개수를 구하면 됨
마을 = 노드
도로 = 간선
여러 도로가 같은 두 마을을 연결할 수 있으므로, 더 짧은 시간의 도로만 고려
*/

class Heap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  insert(item) {
    this.items.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }

    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleUp();
    return min;
  }

  bubbleUp() {
    let index = this.size() - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.items[parentIndex] <= this.items[index]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  // 위치 바꾸기..!
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild] < this.items[leftChild]
          ? rightChild
          : leftChild;

      if (this.items[index] <= this.items[smallerChild]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

// 간선의 값을 이용해서 더하고 distances에 저장하기
function solution1(N, road, K) {
  // 각 노드에 연결된 간선들을 저장할 배열
  const graph = Array.from({ length: N + 1 }, () => []); // 1번 인덱스를 1번 마을로 하기 위해 N+1로 간주
  for (const [a, b, cost] of road) {
    // 도로가 양방향이므로 양쪽 노드에 모두 추가
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  }

  const distances = Array(N + 1).fill(Infinity); // 인덱스가 마을 즉 노드값
  distances[1] = 0; // 1번 마을 즉, 출발점은 0으로 초기화

  const heap = new Heap();
  heap.insert([0, 1]); // 출발점을 heap에 추가 // 거리, 마을 번호

  while (heap.size() > 0) {
    const [dist, node] = heap.pop();

    for (const [nextNode, nextDist] of graph[node]) {
      const cost = dist + nextDist;
      if (cost < distances[nextNode]) {
        distances[nextNode] = cost;
        heap.insert([cost, nextNode]);
      }
    }
  }

  return distances.filter((dist) => dist <= K).length;
}

// shift로 해보기
function solution2(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  for (const [a, b, cost] of road) {
    graph[a].push([b, cost]);
    graph[b].push([a, cost]);
  } // 양방향 그래프 구축

  // 노드 별로 간선의 거리 비용  저장
  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0; // 시작점인 1번 노드 초기값 0으로

  const pq = [[1, 0]]; // 노드, 비용

  while (pq.length > 0) {
    const [curNode, curCost] = pq.shift();

    for (const [nextNode, nextCost] of graph[curNode]) {
      const totalCost = nextCost + curCost;
      if (totalCost < distances[nextNode]) {
        distances[nextNode] = totalCost;
        pq.push([nextNode, totalCost]);
      }
    }
  }

  return distances.filter((dist) => dist <= K).length;
}

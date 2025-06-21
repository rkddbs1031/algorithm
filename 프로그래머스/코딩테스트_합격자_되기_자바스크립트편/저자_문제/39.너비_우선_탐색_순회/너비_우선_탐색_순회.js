class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  // 큐로 풀기 + 방문 여부  visited + while 큐가 비어있기 전까지
  // 방문하지 않았다면 계속 반복

  // 인접한 노드 구하기
  const graphObj = {};
  graph.forEach(([u, v]) => {
    if (!graphObj[u]) graphObj[u] = [];
    graphObj[u].push(v);
  });

  const visited = new Set(); // 노드 담을거임
  const queue = new Queue();
  // 초기 값
  queue.push(start);
  visited.add(start);
  const result = [start];

  while (!queue.isEmpty()) {
    const curNode = queue.pop();
    const neighbors = graphObj[curNode];

    (neighbors || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    });
  }

  return result;
}

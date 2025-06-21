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

function solution(n, vertex) {
  // 1.그래프 구축 -> 양방향
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of vertex) {
    graph[a].push(b);
    graph[b].push(a);
  }

  // 2.방문 여부 체크
  const visited = Array(n + 1).fill(false);
  visited[1] = true;

  // 3.거리 계산할 배열
  const distances = Array(n + 1).fill(0);

  const queue = new Queue();
  // 4. 시작점 즉 1번 노드 초기화
  queue.push(1);

  while (!queue.isEmpty()) {
    const current = queue.pop();

    for (const next of graph[current]) {
      if (!visited[next]) {
        // 방문하지 않은 노드만 실행
        visited[next] = true; // 방문으로 체크
        distances[next] = distances[current] + 1; // 거리 계산
        queue.push(next);
      }
    }
  }

  const maxDis = Math.max(...distances); // 가장 많은 간선
  return distances.filter((d) => d === maxDis).length;
}

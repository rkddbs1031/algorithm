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

// 트리 구축 먼저 하기
function buildTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);
  for (const [parent, target] of edges) {
    tree[parent].push(target);
  }

  return tree;
}

function solution(info, edges) {
  const tree = buildTree(info, edges);
  let maxSheep = 0;

  const queue = new Queue();
  queue.push([0, 1, 0, new Set()]); // 현재 위치, 양의 수, 늑대의 수, 현재까지 방문한 노드 집합

  while (!queue.isEmpty()) {
    const [current, sheepCount, wolfCount, visited] = queue.pop();
    maxSheep = Math.max(maxSheep, sheepCount);

    // tree[0] => [1, 8]
    // tree[current] => next node
    // 방문한 노드 집합에 현재 노드의 이웃 노드 추가
    for (const next of tree[current]) {
      visited.add(next);
    }

    // 인접한 노드들에 대해 탐색
    for (const next of visited) {
      // 늑대: info[next] === 0
      // 양: info[next] === 1
      if (info[next]) {
        // 늑대일 때
        if (sheepCount !== wolfCount + 1) {
          const newVisited = new Set(visited);
          newVisited.delete(next);
          queue.push([next, sheepCount, wolfCount + 1, newVisited]);
        }
      } else {
        // 양일 경우
        const newVisited = new Set(visited);
        newVisited.delete(next);
        queue.push([next, sheepCount + 1, wolfCount, newVisited]);
      }
    }
  }

  return maxSheep;
}

/*
트리 구축 먼저 하기
*/

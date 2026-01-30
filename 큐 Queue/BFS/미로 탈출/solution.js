/**
 * ## 해결 전략
 * -  알고리즘: BFS (너비 우선 탐색)
 *
 * - 핵심 아이디어:
 *  - 시작점에서 가까운 곳부터 순서대로 탐색
 *  - 큐를 사용해 순차적으로 방문한 값 저장하며 탐색
 *  - 처음 도착점에 도달한 순간이 최단 거리
 *
 * - 시간복잡도: O(n × m)
 *      - 모든 칸을 최대 1번 방문
 * - 공간복잡도: O(n × m)
 *      - 큐와 visited 공간
 *
 */

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.items.push(item);
    this.rear++;
  }

  dequeue() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function isValidMove(x, y, n, m) {
  //   x 가 0보다 크면서 n보다 작아야함
  //   y 가 0보다 크면서 m보다 작아야함
  return 0 <= x && x < n && 0 <= y && y < m;
}

function solution(maze) {
  const n = maze.length;
  const m = maze[0].length;
  // maze[행][열]

  const queue = new Queue();
  queue.enqueue([0, 0, 1]); // 시작점 [x, y, 거리]
  const visited = new Set(['0,0']); // 문자열로

  const dx = [0, 0, 1, -1]; // 우 좌 상 하
  const dy = [1, -1, 0, 0]; // 우 좌 상 하

  while (!queue.isEmpty()) {
    const [x, y, dist] = queue.dequeue();

    // 도착 한 경우
    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    // 4가지 방향
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 범위 안이면
      if (isValidMove(nx, ny, n, m)) {
        // 그 위치의 값이 벽이 아니면서 (1이라면 가능) + 방문한적 없다면
        // 거리 업데이트 + 큐 추가
        if (maze[nx][ny] === 1 && !visited.has(`${nx},${ny}`)) {
          queue.enqueue([nx, ny, dist + 1]);
          visited.add(`${nx},${ny}`);
        }
      }
    }
  }

  return -1;
}

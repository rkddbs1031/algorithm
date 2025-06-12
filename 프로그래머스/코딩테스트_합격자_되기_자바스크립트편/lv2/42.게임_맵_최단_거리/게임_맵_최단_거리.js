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

/*
  칸이 나오면 queue와 이동방향 나와야함 + 재귀
*/
function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 이동할 수 있는 방향
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  // 거리 저장 배열 -1로 초기화
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));
  [[-1, -1, -1, -1, -1], [], [], [], []];

  function bfs(start) {
    const queue = new Queue();
    queue.push(start);

    dist[start[0]][start[1]] = 1;

    while (!queue.isEmpty()) {
      const [x, y] = queue.pop();

      for (const [dx, dy] of move) {
        const row = x + dx;
        const column = y + dy;

        // 오차를 넘어간 경우
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }

        // 이동한 위치에 벽이 있는 경우
        if (maps[row][column] === 0) {
          continue;
        }
        // 이동한 위치가 처음 방문하는 경우 queue에 추가하고 거리 갱신
        if (dist[row][column] === -1) {
          queue.push([row, column]);
          dist[row][column] = dist[x][y] + 1;
        }
      }
    }

    return dist;
  }
  bfs([0, 0]);

  return dist[n - 1][m - 1];
}

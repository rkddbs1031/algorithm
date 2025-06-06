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

// 이동 가능한 좌표인지 판단
function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== 'X';
}

function appendToQueue(ny, nx, k, time, visited, queue) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    queue.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  const queue = new Queue(); // '다음에 방문할 위치'를 순서대로 관리하기 위해서 queue활용?
  let endX = -1;
  let endY = -1;

  // 시작점과 도착점을 먼저 찾아 큐에 넣고 방문 여부 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 'S') {
        // 시작점이면
        queue.push([i, j, 0, 0]); // y좌표, x좌표, 레버당김여부, 이동거리
        visited[i][j][0] = true; // y좌표, x좌표, 레버당김여부
      }

      if (maps[i][j] === 'E') {
        // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  // 이동 방향
  const dy = [-1, 1, 0, 0]; // 위, 아래, 왼, 오
  const dx = [0, 0, -1, 1]; // 위, 아래, 왼, 오

  while (!queue.isEmpty()) {
    const [y, x, k, time] = queue.pop(); // 큐에서 좌표와 이동 횟수 꺼냄

    if (y === endY && x === endX && k === 1) {
      return time; // 끝지점이고 레버까지 당긴 여부가 있을 때 => 즉 최종인것 ㅋㅋ
    }

    for (let i = 0; i < 4; i++) {
      // 다음에 이동할 좌표 값
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      if (maps[ny][nx] === 'L') {
        appendToQueue(ny, nx, 1, time, visited, queue);
      } else {
        appendToQueue(ny, nx, k, time, visited, queue);
      }
    }
  }

  return -1;
}
/*
최소 시간, 최단 경로 키워드를 보며
너비 우선 탐색(BFS)과 최소 경로 알고리즘을 생각해야함!

너비 우선 탐색은 이미 거쳐온 경로는 다시 탐색하지 않아도 된다.
visited 배열로 지나간 길인지 체크해야함
=> 이동거리와 레버 당김 여부 같이
*/

/*
🎯 목표
- S(시작) → L(레버) → E(출구)를 최단 거리로 이동하는 경로의 시간을 반환하는 것
=> ❗ 레버(L)를 당기지 않으면 E로 가더라도 실패!

🧠 핵심 로직
✅ BFS (너비 우선 탐색)
하지만 여기선 레버를 당겼는지 여부에 따라 상태가 바뀌기 때문에 visited[y][x]만으로는 부족!

visited 3차원 배열
visited[y][x][k]
k여부애 따라 


어렵다,,,,,,,,,,,,,,,,,,,,,,
*/

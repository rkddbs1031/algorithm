/**
 * ## 문제 풀이
 * - x에서 y까지 가는법을 찾아야 하기 때문에 dp 이용하기..
 * - 인덱스(키)는 만들고자 하는 수, 값 (dp[i])은 x에서 y까지 가는 데 필요한 최소 연산 횟수
 * - dp[x]는 연산하지 않기 때문에 연산횟수 0으로 초기화
 * - 최소 값을 구해야하기 때문에 Math.min() 활용
 */

//dp
function solution(x, y, n) {
  const dp = Array(y + 1).fill(Infinity); //인덱스: 만들고자 하는 수, 값: x에서 y까지 가는 데 필요한 최소 연산 횟수
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
    dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
    dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
  }

  return dp[y] !== Infinity ? dp[y] : -1;
}

// bfs
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

function solution2(x, y, n) {
  const queue = new Queue();
  queue.push([x, 0]); // [현재 숫자, 연산 횟수]
  const visited = new Set([x]);

  while (!queue.isEmpty()) {
    const [cur, calc] = queue.pop();
    if (cur === y) return calc;

    const candidates = [cur + n, cur * 2, cur * 3];
    for (let c of candidates) {
      if (c <= y && !visited.has(c)) {
        visited.add(c);
        queue.push([c, calc + 1]);
      }
    }
  }

  return -1;
}

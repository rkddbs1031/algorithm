/**
 * bfs로 문제 풀기 가능! 프로그래머스의 숫자 변환하기와 비슷한 유형의 문제
 *
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const N = Number(input);

function solution() {
  const queue = [[N, 0]];
  const visited = new Set([N]);
  let front = 0;

  while (front < queue.length) {
    const [cur, count] = queue[front++];

    if (cur === 1) return count;

    const candidates = [cur - 1];
    if (cur % 3 === 0) candidates.push(cur / 3);
    if (cur % 2 === 0) candidates.push(cur / 2);

    for (let c of candidates) {
      if (c > 0 && !visited.has(c)) {
        visited.add(c);
        queue.push([c, count + 1]);
      }
    }
  }
}

console.log(solution(N));

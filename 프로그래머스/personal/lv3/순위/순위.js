/*
플로이드-워셜
i가 k보다 강하고, k가 j보다 강하다면
i가 j보다 강함
중간 노드를 거쳐서 간접 관계 정리할 수 있음
*/
function solution(n, results) {
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  // 1. 결과 입력
  for (const [winner, loser] of results) {
    graph[winner][loser] = 1; // winner이 이김
    graph[loser][winner] = -1; // loser가 졌음
  }

  // 2. 간접 승/패 관계 정리(플로이드-워셜)
  for (let k = 1; k <= n; k++) {
    // 중간 노드
    for (let i = 1; i <= n; i++) {
      // 출발 노드
      for (let j = 1; j <= n; j++) {
        // 도착 노드
        if (graph[i][k] === 1 && graph[k][j] === 1) {
          graph[i][j] = 1;
          graph[j][i] = -1;
        } else if (graph[i][k] === -1 && graph[k][j] === -1) {
          graph[i][j] = -1;
          graph[j][i] = 1;
        }
      }
    }
  }

  /*
  3. 순위 매길 수 있는 선수 찾기 
  => 즉 0이 아닌 것 찾기
  => 승패 합이 n-1면 이 선수의 순위를 정확히 알 수 있음
  */
  let count = 0;
  for (let i = 1; i <= n; i++) {
    let known = 0;
    for (let j = 1; j <= n; j++) {
      if (graph[i][j] !== 0) known++;
    }
    if (n - 1 === known) count++;
  }

  return count;
}

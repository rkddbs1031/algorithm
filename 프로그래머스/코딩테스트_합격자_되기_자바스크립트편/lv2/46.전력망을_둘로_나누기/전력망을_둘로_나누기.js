// 최적이나 최소를 구하라고 하지 않았으므로 !!깊이 우선 탐색!!을 사용
// stack or 재귀

/*
1. 전선을 하나씩 끊어본다.
2. 끊어진 트리 중 하나의 노드 개수만 세도 된다.
3. 연결된 노드 수는 BFS/DFS로 세자.


✅ 전체 알고리즘 정리
wires 배열을 하나씩 제거하며 반복

남은 간선으로 그래프를 만든다.

임의의 시작 노드에서 DFS/BFS로 연결된 노드 개수를 센다.

abs(n - 2 * 연결된 노드 수)를 계산하고, 그 중 최솟값을 찾는다.
*/

// [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]]

function solution(n, wires) {
  // 송전탑 번호가 1번부터 시작하므로 n+1
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    // 양쪽 연결
    graph[a].push(b);
    graph[b].push(a);
  }

  function dfs(node, parent) {
    let cnt = 1;
    for (const child of graph[node]) {
      if (child !== parent) {
        cnt += dfs(child, node);
      }
    }
    return cnt;
  }

  let minDiff = Infinity;
  for (const [a, b] of wires) {
    // 간선 제거
    graph[a].splice(graph[a].indexOf(b), 1);
    graph[b].splice(graph[b].indexOf(a), 1);

    const cntA = dfs(a, b);
    const cntB = n - cntA;

    // 최솟값 갱신
    minDiff = Math.min(minDiff, Math.abs(cntA - cntB));
    //두 전력망 송전탑 개수 차이

    // 간선 복원
    graph[a].push(b);
    graph[b].push(a);
  }

  return minDiff;
}

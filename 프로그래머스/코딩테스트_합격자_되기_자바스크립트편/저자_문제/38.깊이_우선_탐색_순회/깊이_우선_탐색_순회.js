/*
가중치가 x
graph = [출발노드, 도착노드][]
start = 시작노드
*/
function solution(graph, start) {
  // 재귀

  const graphObj = {};
  graph.forEach(([u, v]) => {
    if (!graphObj[u]) graphObj[u] = [];
    graphObj[u].push(v);
  });
  // {
  //   A: ['B', 'C'],
  //   B: ['D', 'E'],
  //   C: ['F'],
  //   E: ['F']
  // }

  const visited = new Set();
  const result = [];

  dfs(start, visited, result, graphObj);
  console.log(result);
}

function dfs(node, visited, result, graphObj) {
  visited.add(node);
  result.push(node);
  (graphObj[node] || []).forEach((neighbor) => {
    //인접한 노드가 방문하지 않았더라면 재귀
    if (!visited.has(neighbor)) {
      dfs(neighbor, visited, result, graphObj);
    }
  });
}

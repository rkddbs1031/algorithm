/*
최적의 해가 아닌 모든 요소 탐색이기 때문에 깊이 우선 탐색이 좋음!
Stack or 재귀!!!!!
노드  + visited로 방문 여부 알아야 함
*/

// 재귀
function dfs(computers, visited, node) {
  visited[node] = true; //방문여부 체크
  for (let i = 0; i < computers[node].length; i++) {
    // 연결되어있으면 1 , 즉 연결되어 있으며 방문한적 없을때
    // visited로 방문여부를 결정해서 중복이 되지 않도록, [i][j]가 1이면 연결된것이므로
    if (computers[node][i] === 1 && !visited[i]) {
      dfs(computers, visited, i);
    }
  }
}
function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false); // 방문여부 노드별 방문했는지 체크하기 위해 노드 값이 들어가지 않아도 됨

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 방문하지 않았다면 dfs로 연결된 노드들 모두 방문하면서 네트워크 개수 증가
      dfs(computers, visited, i);
      answer++; //하나의 네트워크를 새롭게 발견했을 때만 증가
    }
  }

  return answer;
}

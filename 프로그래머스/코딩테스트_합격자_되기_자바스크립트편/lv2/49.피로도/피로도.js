/*
[[최소 피로도, 사용될 피로도]...]
0번부터 굳이 돌지 않아도 됨.
그렇다면 for문으로 인덱스를 중첩으로 돌 수 있게 해야함.
이미 방문한 곳인지도 체크해야함.
visited 사용해야함
백 트래킹을 사용하려면  visited 다시 되돌려야함!!

*/

function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  let answer = 0;

  function dfs(currentFatigue, count) {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, use] = dungeons[i];

      if (currentFatigue >= need && !visited[i]) {
        visited[i] = true;
        dfs(currentFatigue - use, count + 1);
        visited[i] = false;
      }
    }
  }
  dfs(k, 0);
  return answer;
}

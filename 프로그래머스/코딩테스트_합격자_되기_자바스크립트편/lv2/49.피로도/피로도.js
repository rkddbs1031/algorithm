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

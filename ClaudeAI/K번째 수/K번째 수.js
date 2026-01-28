function solution(array, commands) {
  const answer = [];

  for (let [i, j, k] of commands) {
    const target = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    answer.push(target);
  }

  return answer;
}

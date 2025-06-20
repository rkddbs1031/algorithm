function solution(word) {
  const words = ['A', 'E', 'I', 'O', 'U'];
  const wordArr = [];

  const dfs = (cur, length) => {
    if (length > 5) return false;
    wordArr.push(cur);
    words.forEach((w) => dfs(cur + w, length + 1));
  };

  dfs('', 0);
  return wordArr.indexOf(word);
}

function solution(array, commands) {
  return commands.map((command) => {
    const [i, j, k] = command;
    const sliceStr = array.slice(i - 1, j);
    sliceStr.sort((a, b) => a - b);
    return sliceStr[k - 1];
  });
}

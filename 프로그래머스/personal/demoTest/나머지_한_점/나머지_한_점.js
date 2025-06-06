function solution(v) {
  const xCount = {};
  const yCount = {};

  v.forEach((item) => {
    const [x, y] = item;
    xCount[x] = (xCount[x] || 0) + 1;
    yCount[y] = (yCount[y] || 0) + 1;
  });

  const x = +Object.keys(xCount).find((key) => xCount[key] === 1);
  const y = +Object.keys(yCount).find((key) => yCount[key] === 1);

  return [x, y];
}

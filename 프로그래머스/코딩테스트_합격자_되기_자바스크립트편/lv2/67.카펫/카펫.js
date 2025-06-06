function solution(brown, yellow) {
  const total = brown + yellow;
  const maxHeight = Math.floor(Math.sqrt(total));

  /* brown이 무조건 8이상이니까 height는 3 이상일 것*/

  for (let height = 3; height <= maxHeight; height++) {
    if (total % height === 0) {
      const width = total / height;

      if (yellow === (height - 2) * (width - 2) && width >= height) {
        // yellow는 높이 - 2(테두리값) * 넓이 -2(테투리값)  =>즉 (x - 2) * (y - 2) = yellow
        return [width, height];
      }
    }
  }
}

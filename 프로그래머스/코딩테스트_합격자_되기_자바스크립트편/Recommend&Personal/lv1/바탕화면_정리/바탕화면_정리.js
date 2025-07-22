/*
1. row에 #이 있는지, 그 row의 문자열중에 #이 있는지 체크
2. #이 있다면 최솟값을 구해서 lux와 luy 주입
3. #이 있다면 최댓값을 구해서 rdx와 rdy 주입

lux, luy, rdx, rdy을 Infinity, Infinity, -1, -1로 초기화하는 이유!!
=> Infinity로 시작해야 어떤 값이 와도 무조건 더 작고
=> -1처럼 아주 작은 값으로 시작해야 어떤 값이 와도 더 크다!

*/
function solution(wallpaper) {
  let [lux, luy, rdx, rdy] = [Infinity, Infinity, -1, -1];

  wallpaper.forEach((row, i) => {
    [...row].forEach((cell, j) => {
      if (cell === '#') {
        lux = Math.min(lux, i);
        luy = Math.min(luy, j);
        rdx = Math.max(rdx, i + 1);
        rdy = Math.max(rdy, j + 1);
      }
    });
  });

  return [lux, luy, rdx, rdy];
}

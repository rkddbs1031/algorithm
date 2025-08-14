/**
 *
 * 진행 방향은 하 -> 우 -> 상
 * 상향일 때는 x좌표도 -1씩 적용되어야함 -> 대각선이기때문에
 */

function solution(n) {
  const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
  const dy = [1, 0, -1]; // 하 우 상
  const dx = [0, 1, -1]; // 하 우 상

  let x = 0,
    y = 0,
    dir = 0;
  let num = 1; //시작칸
  const maxNum = (n * (n + 1)) / 2; // 최종 칸 개수

  while (num <= maxNum) {
    triangle[y][x] = num++;

    let ny = y + dy[dir];
    let nx = x + dx[dir];

    if (ny < 0 || ny >= n || nx < 0 || nx > ny || triangle[ny][nx] !== 0) {
      // 범위를 벗어나거나, 이미 채워진 곳이라면 => 방향 변경
      dir = (dir + 1) % 3;
      ny = y + dy[dir];
      nx = x + dx[dir];
    }
    y = ny;
    x = nx;
  }

  return triangle.flat();
}

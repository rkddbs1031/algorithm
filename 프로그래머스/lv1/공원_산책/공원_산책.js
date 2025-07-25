/**
 *
 * 1. 공원의 크기 구하기 (끝 좌표도 나옴)
 * 2. 시작 좌표 구하기
 * 3. 루트를 따라서 다음 도착점까지 가는 과정 체크
 * - 주의해야할 점이 도착점만 체크하는 것이 아닌, 도착점까지 가는 길에 'X'가 나오거나 장애물을 넘어서지는 않는지 체크해야함!
 * - 가능한 길이면서 도착점이 괜찮다면, 현재 좌표 업데이트하기
 *
 */

function solution(park, routes) {
  // 1. 공원 크기 구하기
  const width = park[0].length;
  const height = park.length;

  // 2. 시작점 구하기
  let pos = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes('S')) {
      pos = [i, park[i].indexOf('S')];
      break;
    }
  }

  const directions = {
    N: [-1, 0], // y - 1
    S: [1, 0], // y + 1
    W: [0, -1], // x - 1
    E: [0, 1], // x + 1
  };

  for (let route of routes) {
    const [dir, distStr] = route.split(' ');
    const [dy, dx] = directions[dir];
    const dist = Number(distStr);
    const [curY, curX] = pos;

    let canMove = true;

    for (let i = 1; i <= dist; i++) {
      let nY = curY + dy * i;
      let nX = curX + dx * i;

      if (
        nY < 0 ||
        nY > height - 1 ||
        nX < 0 ||
        nX > width - 1 ||
        park[nY][nX] === 'X'
      ) {
        canMove = false;
        break;
      }
    }

    if (canMove) {
      pos = [curY + dy * dist, curX + dx * dist];
    }
  }

  return pos;
}

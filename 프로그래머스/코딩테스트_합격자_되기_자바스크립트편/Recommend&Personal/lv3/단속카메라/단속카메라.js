/**
 * 1. 첫 구간은 아직 카메라가 없기때문에 end점에 카메라 설치.
 * 2. 그다음 구간의 시작점이 카메라 설치한 (이전 end점) 지점 보다 작으면서 범위에 포함된다면 pass
 * 3. 반복되며 camera 설치 지점과 몇대 설치하였는지 업데이트
 *
 */
function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let camera = -30000;

  for (let [start, end] of routes) {
    if (start > camera) {
      camera = end;
      count++;
    }
  }

  return count;
}

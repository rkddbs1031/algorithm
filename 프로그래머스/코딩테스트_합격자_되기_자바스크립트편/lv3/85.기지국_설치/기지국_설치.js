/**
 * 모든 아파트에 전파를 전달하기 위한 증설할 기지국 개수 최솟값을 구하기 위해서는 어떻게??
 * - 기지국 세워져있는 위치 - 전파거리 <= 전파범위 <= 기지국 세워져있는 위치 + 전파거리
 * - 맨 처음 즉, 1번부터 탐색하면서 기지국의 전파 전달 범위내에 있는지 없는지 판단하여 탐색 위치를
 * 전파 전달 범위 바깥으로 이동할 것
 */

function solution(n, stations, w) {
  let answer = 0;
  let curLocation = 1;
  let idx = 0;
  let length = stations.length;

  while (curLocation <= n) {
    if (
      idx < length &&
      curLocation >= stations[idx] - w &&
      curLocation <= stations[idx] + w
    ) {
      // 기지국이 설치된 위치에 도달한 경우
      curLocation = stations[idx] + w + 1; // 전파범위 끝까지 이동후 다음 위치로 이동
      idx++;
    } else {
      // 범위 내에 없다면 - 설치
      answer++;
      curLocation += 2 * w + 1; // 설치했으니 현재 전파범위 끝까지 이동 후 다음 위치로 이동
    }
  }

  return answer;
}

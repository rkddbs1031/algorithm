/*

## 키워드
1. 순서대로 건널 수 있음.
2. 배열 front 값을 하나씩 활용가능
=> 큐 문제로 파악!

1. 다리를 나타내는 bridge 배열 생성
2. time은 다리를 건너는 시간
3. while문을 순회하면서 bridge 배열이 채워졌다가 빈배열이 될 때까지 1씩 증가
4. bridge 배열 front 요소 while 순회할 때 마다 하나씩 제거
5. 다리를 건너고 있는 트럭의 무게를 계산하고 weight와 비교해야 하기때문에 reduce를 이용해서 계산할 것 (sumBridge)
6. truck_weights 길이가 즉, 건널 수 있는 트럭이 존재한다면 if문 추가
7. bridge 안에 있는 즉, 현재 다리를 건너고 있는 트럭의 무게와 지금 건너려고 하는 트럭의 무게의 합이 최대 건널 수 있는 무게인 weight보다 작다면
truck_bridge 배열 front 값을 빼서 bridge에 추가
8. 그렇지 않다면 bridge에 다시 0추가해서 빈 배열이 들어가지 않도록 함
*/

function solution(bridge_length, weight, truck_weights) {
  const bridge = new Array(bridge_length).fill(0);
  let time = 0;

  while (bridge.length) {
    time++;
    bridge.shift();

    // 건널 수 있는 트럭 존재한다면,
    if (truck_weights.length) {
      const sumBridge = bridge.reduce((a, c) => a + c, 0);

      // bridge안에 있는 트럭 무게와 지금 건너려고 하는 트럭의 무게 합이 weight보다 작다면
      if (sumBridge + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}

/**
 *
 * ## 문제 풀이
 * 1. giftMap, givenSum, receiveSum 을 key값 이름, value는 카운트로 하여 obj 관리 -> 이름별 조회가 쉽기 때문에
 * - 기록 용! 해당 obj로 마지막 게산 로직 구현 (참고 4번)
 * - giftMap : 친구 쌍마다 누가 누구한테 선물을 줬는 지 체크할 수 있는 obj
 * - givenMap : 친구가 선물을 준 합계 => 선물 지수 구할 때 필요함 !!
 * - receivedSum : 친구가 선물을 받은 합계 => 선물 지수 구할 때 필요함 !!
 * 2. friends 이용하여 위 3개 obj 초기화 선언
 * 3. gifts 이용하여 이름별로 카운팅할 수 있게 함
 * 4. 기록 바탕으로 가장 많은 선물을 받는 개수를 구함
 * - receivedCount로 이름별로 저장하며 다음달 선물을 받는 개수 집계할 예정.
 * - 중복되지 않고 모든 친구 쌍을 비교
 * - 친구 1이 친구 2에게 준 선물 개수 그리고, 친구 2가 친구 1에게 준 선물 개수를 구하고 이를 비교해서 receivedCount 업데이트
 * - 주고 받은 개수가 같다면 선물 지수 계산 => 해당 친구에게 준 선물 - 친구에게 받은 선물이 선물 지수로 친구1과 친구2 각각 선물 지수 계산하여 비교
 * 5. 키-값으로 선언되어있는 receivedCount로 가장 선물을 많이 받는 개수 구하기
 * - Object.values를 활용하여 해당 value가 가장 큰 수를 return
 *
 */

function solution(friends, gifts) {
  const giftMap = {}; // 이름별 주고 받은 Map
  const givenSum = {}; // 이름별 선물 준 합계
  const receivedSum = {}; // 이름별 선물 받은 합계

  // 2. 초기화 선언
  for (let f of friends) {
    giftMap[f] = {};
    givenSum[f] = 0;
    receivedSum[f] = 0;

    for (let friend of friends) {
      if (f !== friend) giftMap[f][friend] = 0;
    }
  }

  // 3. gift로 선물 주고 받은거 이름별로 카운팅
  for (let gift of gifts) {
    const [giver, taker] = gift.split(' ');
    giftMap[giver][taker]++;
    givenSum[giver]++;
    receivedSum[taker]++;
  }

  const receivedCount = {};
  for (let f of friends) receivedCount[f] = 0;

  // 모든 친구 쌍에 대해 비교
  for (let i = 0; i < friends.length; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      const f1 = friends[i];
      const f2 = friends[j];

      const f1Tof2 = giftMap[f1][f2];
      const f2Tof1 = giftMap[f2][f1];

      if (f1Tof2 > f2Tof1) receivedCount[f1]++;
      else if (f2Tof1 > f1Tof2) receivedCount[f2]++;
      else {
        // 선물 지수 비교
        const f1Score = givenSum[f1] - receivedSum[f1];
        const f2Score = givenSum[f2] - receivedSum[f2];

        if (f1Score > f2Score) receivedCount[f1]++;
        else if (f1Score < f2Score) receivedCount[f2]++;
      }
    }
  }

  return Math.max(...Object.values(receivedCount));
}

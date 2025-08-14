/**
 * ## 문제 풀이
 * 1. 무게 별로 개수 세기
 * 2. 같은 무게인 경우 조합 계산하여 카운팅하기
 * 3. 그리고 다른 무게 쌍인 경우 거리 조합을 하나씩 곱해보며  카운팅하기
 * - 중첩 for문을 통해 무게별로 무게 1과 거리 조합 계산
 * - 거리 값인 distances도 for문 으로 조합처리.
 * - 중복 제거를 위해 w1 >= w2경우는 넘어가게끔 진행
 */

function solution(weights) {
  const weightMap = new Map();

  for (let w of weights) {
    weightMap.set(w, (weightMap.get(w) || 0) + 1);
  }

  const distances = [2, 3, 4];
  let count = 0;

  for (let [w1, count1] of weightMap) {
    // 같은 무게 쌍
    if (count1 >= 2) {
      count += (count1 * (count1 - 1)) / 2;
    }

    // 다른 무게 쌍
    for (let [w2, count2] of weightMap) {
      if (w1 >= w2) continue; // 중복 제거

      for (const d1 of distances) {
        for (const d2 of distances) {
          if (w1 * d1 === w2 * d2) {
            count += count1 * count2;
          }
        }
      }
    }
  }

  return count;
}

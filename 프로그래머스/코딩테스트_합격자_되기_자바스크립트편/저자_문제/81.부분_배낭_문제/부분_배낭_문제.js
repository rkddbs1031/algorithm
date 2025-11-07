/**
 * 무게 한도 내에, 단위가치가 높은 물건부터 담아서 그 총 가치를 계산하는 문제 핵심!!
 * 1. 가치 대비 무게 비율 구하고, 해당 값을 기준으로 높은 순, 즉 가치가 높은 순서대로 정렬한다.
 * 2. 해당 items를 반복문을 통해 돌아가며 남은 무게와 누적 가치 값을 구한다.
 * - 여기서 부분 배낭 무게를 더할 수 있는 것이 핵심!!
 * 3. 배낭 무게가 꽉 찼다면, 즉 weight_limit가 0이 되었다면 종료
 */

function solution(items, weight_limit) {
  items.sort((a, b) => b[1] / b[0] - a[1] / a[0]); // 가치 대비 무게 비율(=단위 무게당 가치)

  let totalValue = 0;
  for (const [weight, value] of items) {
    if (weight_limit === 0) break;

    if (weight_limit >= weight) {
      totalValue += value;
      weight_limit -= weight;
    } else {
      totalValue += weight_limit * (value / weight);
      weight_limit = 0;
    }
  }

  return totalValue.toFixed(2);
}

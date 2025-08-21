/**
 * 가장 먼 집 부터 처리할 것
 */
function solution(cap, n, deliveries, pickups) {
  let answer = 0,
    delivery = 0,
    pickup = 0;

  for (let i = n - 1; i >= 0; i--) {
    delivery += deliveries[i];
    pickup += pickups[i];

    while (delivery > 0 || pickup > 0) {
      answer += 2 * (i + 1);
      delivery -= cap;
      pickup -= cap;
    }
  }

  return answer;
}

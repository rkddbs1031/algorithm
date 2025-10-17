/**
 * 공휴일과 주말이 중복될 수 있으므로 Set 활용해야함!!
 * 공휴일 값을 빠르게 찾기 위해 Set으로 구해두고,
 * 쉬는날도 Set으로 활용해 선언한 뒤, 공휴일과, 주말을 계산해 쉬는날 Set에 저장한다. Set은 중복 값을 제거하기 때문에 둘다 계산해서 한번에 적용해도 괜찮다.
 */

function solution(X, H) {
  const daysIsMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const holidays = new Set(H.map(([m, d]) => `${m}-${d}`));
  const rested = new Map();
  let dayOfWeek = X;

  for (let m = 1; m <= 12; m++) {
    for (let d = 1; d <= daysIsMonth[m - 1]; d++) {
      // 주말
      if (dayOfWeek === 6 || dayOfWeek === 7) rested.add(`${m}-${d}`);
      // 공휴일
      if (holidays.has(`${m}-${d}`)) rested.add(`${m}-${d}`);

      dayOfWeek = (dayOfWeek % 7) + 1;
    }
  }
  return rested.size;
}

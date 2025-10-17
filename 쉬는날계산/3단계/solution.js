/**
 * 공휴일날도 토요일, 일요일인지를 체크해야함 -> 계산 필요
 */
function solution(X, H) {
  const daysIsMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const holidays = new Set(H.map(([m, d]) => `${m}-${d}`));
  const rested = new Set();
  // 공휴일과 주말이 중복될 수 있으므로 Set이 필요함.
  let dayOfWeek = X;

  const calendar = [];
  // 달력 생성 -> m,d가 무슨 요일인지 저장되어 있음.
  for (let m = 1; m <= 12; m++) {
    for (let d = 1; d <= daysIsMonth[m - 1]; d++) {
      calendar.push({ m, d, dayOfWeek });
      dayOfWeek = (dayOfWeek % 7) + 1;
    }
  }
  const days = calendar.length;

  // 임시 공휴일 계산 => holidays
  for (const [m, d] of H) {
    const target = calendar.find((c) => c.m === m && c.d === d);
    if (!target) continue;

    const { dayOfWeek: TDayOfWeek } = target;
    // 토요일이라면
    if (TDayOfWeek === 6) {
      let idx = calendar.findIndex((c) => c.m === m && c.d === d);
      while (--idx >= 0) {
        //idx 를 먼저 뺐으므로, 하루 전날을 조회할 수 있게됨.
        const prev = calendar[idx];
        const key = `${prev.m}-${prev.d}`;

        if (prev.dayOfWeek <= 5 && !holidays.has(key)) {
          holidays.add(key); // 임시 공휴일 등록
          break;
        }
      }
    }

    // 일요일이라면
    if (TDayOfWeek === 7) {
      // 가까운 월요일이니까 +1 인 값이고, 이 값이 캘린더에 있는지를 봐야함.
      let idx = calendar.findIndex((c) => c.m === m && c.d === d);
      while (++idx <= days) {
        //idx를 먼저 더뺐으므로, 하루 다음날을 조회할 수 있게됨.
        const next = calendar[idx];
        const key = `${next.m}-${next.d}`;

        if (next.dayOfWeek <= 5 && !holidays.has(key)) {
          holidays.add(key);
          break;
        }
      }
    }
  }

  // 주말과 공휴일  모두 휴일로 추가
  for (const { m, d, dayOfWeek } of calendar) {
    const key = `${m}-${d}`;
    if (dayOfWeek === 6 || dayOfWeek === 7 || holidays.has(key))
      rested.add(key);
  }

  return rested.size;
}

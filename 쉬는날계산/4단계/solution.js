/**
 * 1. 공휴일날이 1~7값 즉 월~일요일인지 체크해야힌디.
 * - 2023년을 넘어가는 날은 제외해서 체크.
 * 2. 공휴일과 주말 중복 제거하여 휴일을 저장한다.
 * 3. 매달 Y일이 1~7값 즉 월~일요일인지 체크해야한다.
 * 4. 날짜와 그날의 요일 값을 빠르게 체크하기 위해 캘린더에 m,d,dayOfWeek 을 저장하고 시작하자.
 * 5. 공휴일 저장되어있는 Set객체를 이용해서 월급날이 공휴일인지 체크한다.
 * - 월급날 이전날이 더 가까운지, 다음날이 더 가까운지 체크해야함!!!! 중요포인트
 */

function solution(X, H, Y) {
  const daysIsMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const calendar = [];
  let dayOfWeek = X;

  // 캘린더 저장
  for (let m = 1; m <= 12; m++) {
    for (d = 1; d <= daysIsMonth[m - 1]; d++) {
      calendar.push({ m, d, dayOfWeek });
      dayOfWeek = (dayOfWeek % 7) + 1;
    }
  }
  const totalDays = calendar.length;

  // 공휴일 등록
  const holidays = new Set(H.map(([m, d]) => `${m}-${d}`));

  // 임시공휴일 지정
  for (const [m, d] of H) {
    const target = calendar.find((c) => c.m === m && c.d === d); // 공휴일 해당하는 dayOfWeek 값 조회위해
    if (!target) continue;

    // 토요일이라면
    if (target.dayOfWeek === 6) {
      let idx = calendar.findIndex((c) => c.m === m && c.d === d);

      while (--idx >= 0) {
        const prev = calendar[idx];
        const key = `${prev.m}-${prev.d}`;
        if (prev.dayOfWeek <= 5 && !holidays.has(key)) {
          holidays.add(key); // 쉬는 날 지정, 종료
          break;
        }
      }
    }

    // 일요일이라면
    if (target.dayOfWeek === 7) {
      let idx = calendar.findIndex((c) => c.m === m && c.d === d);

      while (++idx < totalDays) {
        const next = calendar[idx];
        const key = `${next.m}-${next.d}`;
        if (next.dayOfWeek <= 5 && !holidays.has(key)) {
          holidays.add(key);
          break;
        }
      }
    }
  }

  // 공휴일과 주말 중복 제거해 휴일 저장하기.
  const rested = new Set();
  for (const { m, d, dayOfWeek } of calendar) {
    const hasHoliday = holidays.has(`${m}-${d}`);
    if (dayOfWeek === 6 || dayOfWeek === 7 || hasHoliday) {
      rested.add(`${m}-${d}`);
    }
  }

  // 진짜 월급날 구하기
  const salaryDays = [];
  for (let m = 1; m <= 12; m++) {
    // 월급날이 임시 공휴일이라면!
    const key = `${m}-${Y}`;
    const targetIdx = calendar.findIndex((c) => c.m === m && c.d === Y);

    // 휴일인 경우 가까운 평일에
    //  => 주말 6,7이면 전날, 평일이면 그 전날 평일에 + 그 평일도 공휴일이다? 그럼 다음날로 계산, 여기서 이도저도 아니다? 그냥 그 Y날이 월급날.
    if (rested.has(key)) {
      let found = false;
      let idx = targetIdx;
      let r = 1; // 양쪽 거리 체크
      const maxDay = daysIsMonth[m - 1];

      // 평일 탐색 + 양쪽 거리 체크해서 더 가까운날 구하기
      while (!found && (Y - r >= 1 || r <= maxDay)) {
        // 1. 이전 후보(동거리일 때 이걸 우선)
        if (Y - r >= 1) {
          const prevIdx = targetIdx - r;
          if (prevIdx >= 0 && calendar[prevIdx].m === m) {
            const prev = calendar[prevIdx];
            const k = `${prev.m}-${prev.d}`;
            if (prev.dayOfWeek <= 5 && !rested.has(k)) {
              salaryDays.push(prev.d);
              found = true;
              break;
            }
          }
        }

        // 👉 ② 다음 후보
        if (Y + r <= maxDay) {
          const nextIdx = targetIdx + r;
          if (nextIdx < totalDays && calendar[nextIdx].m === m) {
            const next = calendar[nextIdx];
            const k = `${next.m}-${next.d}`;
            if (next.dayOfWeek <= 5 && !rested.has(k)) {
              salaryDays.push(next.d);
              found = true;
              break;
            }
          }
        }

        r++; // 거리 확장
      }

      // 3.그래도 못찾았다? 그러면 그냥 그날(Y)로.
      if (!found) salaryDays.push(Y);
    } else {
      // 평일인 경우
      salaryDays.push(Y);
    }
  }

  return salaryDays;
}

// // 1. 이전 평일 탐색
// while (--idx >= 0) {
//   const prev = calendar[idx];

//   if (prev.m < m) break; // 전월로 넘어가면 stop

//   if (prev.dayOfWeek <= 5 && !rested.has(`${prev.m}-${prev.d}`)) {
//     salaryDays.push(prev.d);
//     found = true;
//     break;
//   }
// }

// // 2. 전날로 찾지 못했다면 다음날 평일로 이동해야함.
// if (!found) {
//   idx = targetIdx;

//   while (++idx < totalDays) {
//     const next = calendar[idx];

//     if (next.m > m) break; // 다음 달로 넘어가면 stop

//     if (next.dayOfWeek <= 5 && !rested.has(`${next.m}-${next.d}`)) {
//       salaryDays.push(next.d);
//       found = true;
//       break;
//     }
//   }
// }

function solution(X) {
  const days = 365;
  let weekendCount = 0;
  let dayOfWeek = X;

  for (let i = 0; i < days; i++) {
    if (dayOfWeek === 6 || dayOfWeek === 7) weekendCount++;

    dayOfWeek = (dayOfWeek % 7) + 1;
  }

  return weekendCount;
}

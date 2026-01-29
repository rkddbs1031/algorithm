// 각 event가 최소 빈도수를 넘지 않는 선에서, 가장 긴 연속된 구간을 구하라.

function findConsistentLogs(userEvent) {
  const evetObj = {};
  for (let event of userEvent) {
    evetObj[event] = (evetObj[event] || 0) + 1;
  }
  const minEvent = Math.min(...Object.values(evetObj)); // 최소 빈도 수 구했고,

  const n = userEvent.length;
  let maxLength = 0;
  let left = 0; // index
  const logObj = {};

  for (let right = 0; right < n; right++) {
    const cur = userEvent[right];
    logObj[cur] = (logObj[cur] || 0) + 1;

    // 조건 위반 : logObj[cur]이 minEvent를 넘긴다면?
    while (logObj[cur] > minEvent) {
      const leftEvent = userEvent[left];
      logObj[leftEvent]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

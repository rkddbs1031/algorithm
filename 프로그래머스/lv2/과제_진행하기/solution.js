/**
 * 1. plans를 시작 시간 기준으로 정렬
 * 2. 현재 진행 중인 과제의 남은 시간을 추적
 * 3. 다음 과제 시작 시간과 비교해서:
 * - 현재 과제가 끝나면 stack에서 멈춘 과제를 이어서 진행
 * - 새 과제가 시작되면 진행 중 과제를 멈추고 stack에 저장
 * 4. 과제가 끝날 때만 answer.push(name)
 *
 */

function solution(plans) {
  // 1. plans를 시작 시간으로 정렬 + 시작 시간 분단위로 변형하기
  const sortedPlans = plans
    .map(([name, start, playtime]) => [
      name,
      transferTime(start),
      Number(playtime),
    ])
    .sort((a, b) => a[1] - b[1]);

  const stopTasks = [];
  const answer = [];

  // 2. 진행해야하는 과제 추적
  for (let i = 0; i < sortedPlans.length; i++) {
    let [name, start, playtime] = sortedPlans[i];
    const nextStart = sortedPlans[i + 1]?.[1] ?? Infinity;

    // 3. 다음 과제 시직 시간과 비교하기

    if (start + playtime > nextStart) {
      // 다음 과제 시작 시점보다 늦게 끝나는 과제일 경우
      const remaining = start + playtime - nextStart;
      stopTasks.push([name, remaining]);
    } else if (start + playtime === nextStart) {
      answer.push(name);
    } else {
      answer.push(name);

      let leftTime = nextStart - (start + playtime); // 남은 시간

      // 멈춘 과제 수행 (LIFO)
      while (leftTime > 0 && stopTasks.length > 0) {
        let [stopName, remaining] = stopTasks.pop();

        if (remaining <= leftTime) {
          answer.push(stopName);
          leftTime -= remaining;
        } else {
          stopTasks.push([stopName, remaining - leftTime]);
          leftTime = 0;
        }
      }
    }
  }

  while (stopTasks.length > 0) answer.push(stopTasks.pop()[0]);

  return answer;
}

function transferTime(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

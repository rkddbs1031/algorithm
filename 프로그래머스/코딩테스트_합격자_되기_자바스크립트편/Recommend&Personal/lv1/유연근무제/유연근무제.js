/*
## 로직 순서!!
1. 출근 인정시간 구하기
- 여기서 단순히 + 10만 하는것이 아님!
- 예를 들어 8시 55분으로 지정한 경우 855 + 10 인 865가 아니라, 9시 5분인 즉 905가 출근 인정시간이 되어야함!
2. timelogs를 보며 토,일요일을 제외한 모든 요일이 정상 출근하였는지 구하기
- schedule을 돌면서 timelogs에서 토,일요일을 제외한 나머지 요일이 출근 인정 시간에 맞게 !!모두!! 출근이 되었는지 체크
- every 메서드를 이용하여 true 값인지 확인
3. 모든 요일에 정상 출근하였다면 count + 1 하기
4. 몇명이 정상 출근하였는지 count reture하기
 */

function solution(schedules, timelogs, startday) {
  let count = 0;
  // 1. 출근 인정 시간 구하기
  const allowedSchedules = schedules.map((schedule) => {
    const hour = Math.floor(schedule / 100);
    const minute = schedule % 100; // schedule - hour * 100말고 나머지로
    const totalMinutes = hour * 60 + minute + 10;
    const newHour = Math.floor(totalMinutes / 60);
    const newMinute = totalMinutes % 60;
    return newHour * 100 + newMinute;
  });

  for (let i = 0; i < schedules.length; i++) {
    let allowedTime = allowedSchedules[i];

    let valid = timelogs[i].every((time, index) => {
      let day = (startday + index) % 7;
      if (day === 6 || day === 0) return true;
      return time <= allowedTime;
    });

    if (valid) count++;
  }

  return count;
}

function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length;

  // 각 작업의 배포 가능일 개산
  const dayLeft = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  // ex) 7 3 9

  let count = 0;
  let maxDay = dayLeft[0]; // 가장 우선순위가 높은 배포 가능일 !? // 7

  for (let i = 0; i < n; i++) {
    if (dayLeft[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = dayLeft[i];
    }
  }

  answer.push(count);
  return answer;
}

/*
1. 먼저 각 작업의 배포 가능일을 계산한다.
2. 가장 맨 앞에 있는 데이터의 배포 가능일을 변수에 저장.
3. 


i count maxDay answer
0   1     7      []
1   2     7      []
2   1     9      [2]
                 [2, 1]
*/

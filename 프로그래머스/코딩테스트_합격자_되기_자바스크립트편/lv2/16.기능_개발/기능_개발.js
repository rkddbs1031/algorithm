function solution(progresses, speeds) {
    const daysLeft = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    // 각 작업의 배포 가능일 계산
    //ex) 7, 3, 9일 작업 소요
    
    const answer = [];
    let count = 0;
    let maxDay = daysLeft[0]; // 가장 우선순위가 높은 ? 배포 가능일
    
    for(let i = 0; i < progresses.length; i++) {
        if(daysLeft[i] <= maxDay) { 
            count++;
        } else { //배포 예정일이 기준 배포일 보다 느리면
            answer.push(count);
            count = 1; // 다시 리셋
            maxDay = daysLeft[i];
        }
    }

    answer.push(count);
    return answer;

}
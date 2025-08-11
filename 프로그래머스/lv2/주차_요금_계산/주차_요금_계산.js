/**
 * ## 문제풀이
 *
 * 1. 입차 시간과 누적 주차 시간을 저장하는 map 선언
 * 2. 입차(IN), 출차(OUT)으로 체크하며 시간 분으로 변환하여 계산한 뒤 저장
 * - IN이라면 입차 시간 저장소에 저장
 * - OUT이라면 IN저장소 map에서 조회하여 주차시간 계산 뒤 누적 주차 시간 저장 map에 누적하여 더한 뒤, 입차 시간 저장소에서 제거하기 반복
 * 3. 출차 안된 차량은 inTime에 그대로 있을것이기 때문에 23:59로 출차시간 계산하여 totalMap에 누적하여 더하기
 * 4. key-values로 요금 계산하여 저장하고, 키 값 즉 차량번호가 작은 차량번호부터 정렬하여 요금 출력하기.
 */

function transferTimeToMinute(time) {
  const [hour, minute] = time.split(':').map(Number);
  return hour * 60 + minute;
}

function solution(fees, records) {
  const inTime = new Map(); // 입차 시간 저장
  const totalMap = new Map(); // 누적 주차 시간

  // 1. 입차,출차 status 확인 후 주차시간 누적해서 계산하기 -> 분으로 계산
  for (let record of records) {
    const [time, carNum, status] = record.split(' ');
    const transferTime = transferTimeToMinute(time);

    if (status === 'IN') {
      inTime.set(carNum, transferTime);
    } else {
      const INTime = inTime.get(carNum);

      let totalTime = totalMap.get(carNum) || 0;
      totalMap.set(carNum, totalTime + transferTime - INTime);
      inTime.delete(carNum);
    }
  }

  // 2. 출차 안된 차량 23:59으로 출차 처리!
  for (let [carNum, time] of inTime) {
    const parkingTime = 23 * 60 + 59 - time;
    let totalTime = totalMap.get(carNum) || 0;
    totalMap.set(carNum, totalTime + parkingTime);
  }

  // 3. 요금 계산 하기
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const feeMap = {};

  for (let [carNum, parkingTime] of totalMap) {
    if (parkingTime <= baseTime) feeMap[carNum] = baseFee;
    else {
      feeMap[carNum] =
        baseFee + Math.ceil((parkingTime - baseTime) / unitTime) * unitFee;
    }
  }

  return Object.keys(feeMap)
    .sort((a, b) => a.localeCompare(b))
    .map((carNum) => feeMap[carNum]);
}

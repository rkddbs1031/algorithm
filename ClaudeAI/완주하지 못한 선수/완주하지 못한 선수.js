//** 일반  Obj로 풀기 */
function solution(participant, completion) {
  const participantObj = {};

  for (let p of participant) {
    participantObj[p] = (participantObj[p] || 0) + 1;
  }

  for (let c of completion) {
    participantObj[c] -= 1;
  }

  for (const key in participantObj) {
    // 객체는 in으로!
    if (participant[key] > 0) return key;
  }
}

/** Map으로 풀기 */
function solution2(participant, completion) {
  const participantObj = new Map(); // 기본 obj도 사용가능

  for (let p of participant) {
    participantObj.set(p, (participantObj.get(p) || 0) + 1);
  }

  for (let c of completion) {
    if (participantObj.has(c)) {
      participantObj.set(c, participantObj.get(c) - 1);
    }

    if (participantObj.get(c) === 0) participantObj.delete(c);
  }

  for (let [name, count] of participantObj) {
    if (count > 0) return name;
  }
}

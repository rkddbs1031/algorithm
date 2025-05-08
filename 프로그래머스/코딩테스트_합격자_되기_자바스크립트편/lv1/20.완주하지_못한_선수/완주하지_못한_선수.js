/*
1. object를 이용하여 해시 테이블 만들기
- key: 참가자 이름, value: 같은 이름 개수

2. 완주자와 obj를 비교해서 같은 이름이 있다면 -1

3. obj를 for ~ in 을 활용해서 value가 1 이상이라면 완주하지 못한 참가자가 있는 것이 때문에 key값 즉, 참가자 이름 return
*/

function solution(participant, completion) {
  const obj = {};

  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  for (const c of completion) {
    obj[c] -= 1;
  }

  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}

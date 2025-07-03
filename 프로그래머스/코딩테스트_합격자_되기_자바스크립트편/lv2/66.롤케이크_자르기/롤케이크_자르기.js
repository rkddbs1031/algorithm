/* 
1. 성능 실패
=> slice하고 set, size를 하는데 연산 시간 복잡도가 O(N²)일 것임 ㅜㅜ
*/
function solution(topping) {
  let count = 0;

  if (topping.length === 1) return 0;

  if (topping.length === 2) {
    return new Set(topping).size === 1 ? 0 : 1;
  }

  for (let i = 1; i < topping.length; i++) {
    let A = new Set(topping.slice(0, i)).size;
    let B = new Set(topping.slice(i, topping.length)).size;

    if (A === B) count++;
  }

  return count;
}

/*
2. 성공!!
- 동생이 일단 토핑별 개수 체크
- new Set으로 중복 제거와 동시에 하나씩 철수가 가져오기
- 동생의 Map 사이즈도 토핑별이므로 size로 개수 구하기 가능!
따라서 철수의 size와 동생의 size 계산해서 같다면 count up!!

*/
function solution2(topping) {
  const left = new Set(); // 철수
  const right = new Map(); // 동생

  // 토핑별 개수 담기
  for (const t of topping) {
    right.set(t, (right.get(t) || 0) + 1);
  }

  let count = 0;

  for (const t of topping) {
    left.add(t);

    right.set(t, right.get(t) - 1); // 하나씩 줄이기
    if (right.get(t) === 0) right.delete(t); // 없으면 아예 삭제

    if (left.size === right.size) count++;
  }

  return count;
}

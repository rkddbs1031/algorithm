function solution(name) {
  let count = 0;
  let move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const char = name[i];
    count += Math.min(char.charCodeAt(0) - 65, 91 - char.charCodeAt(0));

    // 좌우 이동 인덱스
    // 다음 바꿔야 할 문자의 위치(next)를 찾기 위해 A 연속 구간 건너뛰기
    let next = i + 1;
    while (next < name.length && name[next] === 'A') {
      next++;
    }

    // name.length - next => 뒤쪽 바꿔야할 문자 남은 개수
    move = Math.min(
      move,
      i * 2 + name.length - next, // : 오른쪽 갔다가 왼쪽으로
      (name.length - next) * 2 + i // : 왼쪽 갔다가 오른쪽
    );
  }

  return count + move;
}

function solution(n) {
  let count = 0;
  const positions = new Array(n);

  /* 
  검사 대상
  1. 같은 열 col에 이미 퀸이 있는 가?
  2. 왼쪽 대각선 확인
  3. 오른쪽 위 대각선
  */

  function isSafe(row, col) {
    for (let i = 0; i < row; i++) {
      if (
        positions[i] === col || // 같은 열
        positions[i] - i === col - row || // 왼 위 대각선
        positions[i] + i === col + row // 오른 위 대각선
      )
        return false;
    }

    return true;
  }

  function dfs(row) {
    // 몇번째 행에 퀸을 둘지
    if (row === n) {
      // 마지막 라인까지 왔다라는 것은 문제 없다라는 것이니까!
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        positions[row] = col;
        dfs(row + 1);
      }
    }
  }

  dfs(0); // 시작 점
  return count;
}

/**
 * ## 문제풀이
 * 1.board 현재 좌표에서 왼쪽, 위쪽, 그리고 대각선까지 고려하여 1이 등장하는지 확인해야함
 * 2. 첫번째 행과 열은 생각 x
 * 3. 메모제이션을 하며  갱신할 칸의 왼,위,대각선 왼쪽 방향 중 가장 작은 값에 1을 더하여 갱신
 * - 특정 칸에서 만들 수 있는 정사각형의 크기 점화식으로 정리 -> board[i][j] = min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + 1;
 */
function solution(board) {
  let row = board.length;
  let column = board[0].length;

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] === 1) {
        //현재 위치에서의 위,왼쪽,대각선왼쪽 값 가져오기
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const upLeft = board[i - 1][j - 1];

        board[i][j] = Math.min(up, left, upLeft) + 1;
      }
    }
  }

  const maxVal = Math.max(...board.map((row) => Math.max(...row)));

  return maxVal * maxVal;
}

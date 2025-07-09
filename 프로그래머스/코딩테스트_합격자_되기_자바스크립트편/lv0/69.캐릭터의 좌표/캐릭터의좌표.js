function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  const maxX = Math.floor(board[0] / 2);
  const maxY = Math.floor(board[1] / 2);

  keyinput.forEach((input) => {
    if (input === 'left' && x > -maxX) x--;
    else if (input === 'right' && x < +maxX) x++;
    else if (input === 'up' && y < +maxY) y++;
    else if (input === 'down' && y > -maxY) y--;
  });

  return [x, y];
}

/**
 * ## 문제 풀이
 * => stack 문제로 접근 가능
 *
 * 1. moves 배열을 순회하면서 (for of)
 * 2. 각 move에 해당하는 column에서 가장 위의 인형을 찾아 뽑고 (board[i][move - 1]에서 위에서부터 탐색)
 * 3. 0이 아닌 인형을 만나면 (0은 빈공간) 해당 인형을 뽑고 빈공간으로 만든다. ( board[i][move - 1] = 0 )
 * 4. stack 마지막 요소 즉 맨위에 인형이 지금 뽑은 인형과 비교하여 같다면 인형을 제거하고 제거한 인형 count를 업데이트 한다.
 * 5. 다르다면 stack에 push.
 *
 */

function solution(board, moves) {
  const stack = [];
  let count = 0;

  for (let move of moves) {
    let foundDoll = 0;

    for (let i = 0; i < board.length; i++) {
      const doll = board[i][move - 1];

      if (doll !== 0) {
        foundDoll = doll;
        board[i][move - 1] = 0; // 빈공간을 변경
        break; // 가장 가까운 인형 찾기 성공
      }
    }

    if (foundDoll === 0) continue; // 인형 없음

    if (stack.length > 0 && stack[stack.length - 1] === foundDoll) {
      stack.pop();
      count += 2;
    } else {
      stack.push(foundDoll);
    }
  }

  return count;
}

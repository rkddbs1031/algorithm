/**
 * ## 문제풀이
 * 1. keypad 별 좌표 선언
 * 2. 1,3,9와 3,6,9 키패드는 정확하게 L, R를 가릴 수 있기 때문에 쉽게 찾기 위해 set으로 선언
 * - 위치 변경될 때마다 왼,오 위치 좌표 업데이트
 * 3. 그 외의 키패드일 경우
 * - 맨해튼 거리로 거리계산하기 -> 대각선 이동 없이 오직 위·아래·왼쪽·오른쪽으로만 움직이기때문에
 * |x1 - x2| + |y1 - y2|을 계산하여 다음 눌러야할 키패드 좌표까지의 거리 계산하기 -> getDistance 함수
 * 4. 거리 값이 동일할 경우 왼손잡이,오른손 잡이를 비교
 *
 */

function getDistance(pos, targetPos) {
  const [tx, ty] = targetPos;
  const [cx, cy] = pos;
  return Math.abs(tx - cx) + Math.abs(ty - cy);
}

function solution(numbers, hand) {
  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  let leftPos = keypad['*'];
  let rightPos = keypad['#'];
  const leftSet = new Set([1, 4, 7]);
  const rightSet = new Set([3, 6, 9]);

  let result = '';

  for (let n of numbers) {
    const pos = keypad[n];
    if (leftSet.has(n)) {
      leftPos = pos;
      result += 'L';
    } else if (rightSet.has(n)) {
      rightPos = pos;
      result += 'R';
    } else {
      // 거리 계산
      const leftDist = getDistance(leftPos, pos);
      const rightDist = getDistance(rightPos, pos);

      if (leftDist < rightDist) {
        leftPos = pos;
        result += 'L';
      } else if (leftDist > rightDist) {
        rightPos = pos;
        result += 'R';
      } else {
        if (hand === 'left') {
          leftPos = pos;
          result += 'L';
        } else {
          rightPos = pos;
          result += 'R';
        }
      }
    }
  }

  return result;
}

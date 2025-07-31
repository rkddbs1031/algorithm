/**
 * ## 문제 풀이
 * 1. 층마다 수를 넣을 것이기 때문에 좌표를 넣을 공간 선언 (총 줄수 대비 너비만큼)
 * 2. 방향 체크하며 좌표공간에 번호 삽입
 * - 난 아래부터쌓는 것이 아닌 위에서부터 하나씩 넣었음! 따라서 번호 조회할 때는 반대로 찾아야함.
 * - 총 줄수 만큼 반복하며, 인덱스가 홀수인 경우 좌 -> 우 방향으로 가고, 짝수인 경우 우 -> 좌 방향으로 진행
 * - 여기서 w까지 했는지 주의해야하며, 현재 번호가 n을 넘지 않는지 체크해야한다.
 * 3. stack을 위에서부터 쌓는 구조로 정렬했기 때문에 h -1 즉 가장 아래에 있는 인덱스부터 조회하며 타겟번호와 맞는 높이 찾기
 * - 현재 타켓 번호의 y좌표값과 동일하며 그 위로 0이 아닌 수가 몇개 있는 지 카운트 (처음에 좌표공간을 0도 같이 넣었기 때문에 0은 빈공간으로 체크해야함.)
 */
function solution(n, w, num) {
  const h = Math.ceil(n / w); // 총 줄 수
  const stack = Array.from({ length: h }, () => Array(w).fill(0)); // 좌표공간 초기화
  let curNum = 1;

  for (let i = 0; i < h; i++) {
    if (i % 2) {
      for (let j = w - 1; j >= 0 && curNum <= n; j--) {
        stack[i][j] = curNum++;
      }
    } else {
      for (let j = 0; j < w && curNum <= n; j++) {
        stack[i][j] = curNum++; // curNum 넣고 +1
      }
    }
  }

  for (let i = h - 1; i >= 0; i--) {
    for (let j = 0; j < w; j++) {
      if (stack[i][j] === num) {
        let count = 1; // 타겟 본인 포함

        for (let k = h - 1; k > i; k--) {
          if (stack[k][j] !== 0) count++;
        }
        return count;
      }
    }
  }
}

/*

N = 1 (n % 4  === 1) => 90도
N = 2 (n % 4  === 2) => 180도 (90도 연산 2번)
N = 3 (n % 4  === 3) => 270도
N = 4 (n % 4  === 0) => 기존 그대로

=> 여기서 더 생각해보면 회전이 4회 이상일 경우~!

1. 90도 회전하는 함수 만들기
2. 왼쪽인지 오른쪽인지 확실히 하기 ㅜㅜ 왼쪽으로 돈다고 생각함 으악 ;;
*/

function solution(arr, n) {
  function rotate90(arr) {
    const n = arr.length;
    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    // 왼쪽으로 돌면 A[i][j] => A[N-1-j][i]
    // 오른쪽으로 돌면 A[i][i] => A[j][N-1-i]
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - 1 - i] = arr[i][j];
      }
    }

    return rotated;
  }

  if (n % 4 === 0) return arr;

  let result = arr.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    result = rotate90(result);
  }

  return result;
}

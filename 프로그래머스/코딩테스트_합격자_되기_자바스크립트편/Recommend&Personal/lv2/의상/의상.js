/*
해석!
headgear: 3가지 (모자A, 모자B, 안입기)
eyewear: 2가지 (안경C, 안입기)
전체 조합 = 3 × 2 = 6가지

1. 모자A + 안경C
2. 모자A + (안입기)
3. 모자B + 안경C
4. 모자B + (안입기)
5. (안입기) + 안경C
6. (안입기) + (안입기) ← 이거 빼야함!
*/

function solution(clothes) {
  const clothCoutObj = {};
  for ([, type] of clothes) {
    clothCoutObj[type] = (clothCoutObj[type] || 0) + 1; // 종류 별로 이름까지 저장하지 않아도 됨! 왜냐면 최종 조합 갯수를 정하는것이기  때문에!
  }

  let answer = 1;
  for (const count of Object.values(clothCoutObj)) {
    answer *= count + 1; // 확통 ㅋㅋ
  }

  return answer - 1; // 아예 안입는 수를 빼주는 것!
}

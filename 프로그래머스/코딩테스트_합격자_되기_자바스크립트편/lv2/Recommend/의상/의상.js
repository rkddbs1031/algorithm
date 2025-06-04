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

function solution(d, budget) {
  d.sort((a, b) => a - b); // 오름차순으로 정렬
  let count = 0;

  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      count++;
      console.log(count);
    } else {
      break;
    }
  }

  return count;
}
/*
  특정 물품을 말하는 것이 아닌 최대로 지원받을 수 있는 물품의 개수이기 때문에
  정렬 후에 가장 적은 금액의 물품을 예산에서 빼서 count 세기.
  */

function solution(numbers, target) {
  let count = 0;

  function dfs(index, currentSum) {
    /*
      
      어떨때 count를 높이고 종료시킨다?
           index와 numbers가 같고, currentSum이 target과 같을 때.
      */
    if (index === numbers.length) {
      if (currentSum === target) count++;
      return;
    }

    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  }

  dfs(0, 0); // 시작 인덱스, 총 덧셈
  return count;
}

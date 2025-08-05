/**
 * 테스트 케이스 몇개 런타임 오류! 개선 필요.
 */

function solution(numbers) {
  const max = Math.max(...numbers);
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const target = numbers[i];

    if (target === max) {
      answer.push(-1);
    } else {
      let num = -1;
      for (let j = i + 1; j < numbers.length; j++) {
        if (target < numbers[j]) {
          num = numbers[j];
          break;
        }
      }
      answer.push(num);
    }
  }
}

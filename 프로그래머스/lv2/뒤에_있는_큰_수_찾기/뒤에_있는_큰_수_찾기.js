/**
 * 테스트 케이스 몇개 런타임 오류! 개선 필요.
 * - max가 꼭 필요한 숫자인지 체크할 것.
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

/**
 *
 */

function solution2(numbers) {
  const answer = Array(numbers.length).fill(-1);
  const stack = []; // 인덱스 저장 배열

  for (let i = 0; i < numbers.length; i++) {
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      const idx = stack.pop();
      answer[idx] = numbers[i];
    }
    stack.push(i);
  }

  return stack;
}

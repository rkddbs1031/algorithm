/*
스택 문제로 보면 됨!
최근에 쌓인 4개 요소를 뒤에서부터 꺼내서 1231 구조로 되어있는지 확인하면 됨!

slice로 문제를 풀어도 되지만 최악의 시간 복잡도가 O(n^2)이 되고,
pop을 이용하면 O(n)이 됨!
따라서 성능을 위해서라면 2번 방식으로 푸는 것이 좋음!
*/

// 1.  slice로 배열 나눠서 비교하기.
function solution(ingredient) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    if (stack.length >= 4) {
      let last = stack.slice(-4).join('');
      if (last === '1231') {
        count++;
        stack.splice(-4);
      }
    }
  }

  return count;
}

// 2. slcie 이용하지 않기
function solution2(ingredient) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    let stackLength = stack.length;
    if (stackLength >= 4) {
      if (
        stack[stackLength - 1] === 1 &&
        stack[stackLength - 2] === 3 &&
        stack[stackLength - 3] === 2 &&
        stack[stackLength - 4] === 1
      ) {
        // 시간 복잡도 O(1)
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        count++;
      }
    }
  }

  return count;
}

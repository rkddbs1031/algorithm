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

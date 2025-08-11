// 순서는 바꿀 수 없고, k개를 빼서 가장 큰 수 만들기
// stack + greedy

/**
 * ## 문제풀이
 * 1. k를 제거하며 가장 큰 수를 만들기 위해서는 "왼쪽부터 순서대로, 지금보다 큰 숫자가 올 수 있으면 이전 숫자를 빼자" 전략으로 가야함
 * - 반복해서 조건을 만족할 때까지 제거해야 하니까 while문 적용
 * - 잎자리 숫자는 최대한 큰 수로 남겨야하고, 다음 숫자도 그 다음숫자도 큰 수를 남길 수 있게 해야함
 * 2. idx는 문자열의 인덱스, stack은 큰 수들 차례대로 넣어두는 곳
 * - 제거할 k 개수 남아있고, stack이 비어있지 않으며, 현재 조회하고 있는 숫자가 stack의 마지막 숫자가 크다면 stack 마지막 수 제거하고, 제거할 개수 하나 제거.
 * - 여기서 포인트는 해당 부분을 while문으로 해야함!
 * 3. slice하는 이유는 예를들어 '111111' k = 2라고 했을 때, stack.join은 '111111'이 될 것이기 때문에 마지막 k개수 제거해야한다.
 */

function solution(number, k) {
  const stack = [];
  let idx = 0;

  while (idx < number.length) {
    const cur = number[idx];

    while (k > 0 && stack.length > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k--;
    }
    stack.push(cur);
    idx++;
  }

  return stack.slice(0, stack.length - k).join('');
}

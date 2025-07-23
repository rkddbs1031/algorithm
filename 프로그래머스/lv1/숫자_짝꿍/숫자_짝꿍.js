/*
  이 문제는 어떤 숫자가 '몇 번' 등장했는지만 알면 됨!!
  => 위치나 순서는 상관이 없기 때문에 stack처럼 중복된 수를 하나씩 넣는것을 비효율적임!!

  X, Y는 0이상 9이하 숫자로 이루어져 있는 문자열.
  배열의 인덱스 값을 활용하고, 문자열을 하나씩 분석하여 숫자별 카운팅을 할 것!

  그리고 큰 수를 구하기 위해 내림차순으로 반복분 진행.
  countX와 countY 배열의 길이는 10 즉 인덱스는 9까지 있기 때문에 for문 진행

  countX와 countY의 인덱스에 저장되어있는 숫자 카운팅의 중복된 수만큼 찾기 위해 Math.min을 활용하여 찾기!
  그 수만큼(commonCount, repeat) result에 push 할 것!
  - 여기서 repeat 메서드는 string만 취급.

  내림 차순 즉 큰 수대로 push 되어있는 result를 합쳐서,
  answer의 길이가 0인 즉, 없다면 '-1'을,
  1이상이지만 0이 가장 큰 수라면 answer[0]이 '0'으로 되어 있을 것이기 때문이 이는 '0'을,
  이외의 모든 요소들은 join한 값을 리턴하도록 한다.
*/

function solution(X, Y) {
  const countX = new Array(10).fill(0);
  const countY = new Array(10).fill(0);

  // 1. 숫자별 카운팅
  for (let c of X) countX[c]++;
  for (let c of Y) countY[c]++;

  const result = [];

  for (let i = 9; i >= 0; i--) {
    const commonCount = Math.min(countX[i], countY[i]);
    result.push(i.toString().repeat(commonCount));
  }

  const answer = result.join('');

  if (answer.length === 0) return '-1';
  if (answer[0] === '0') return '0';

  return answer;
}

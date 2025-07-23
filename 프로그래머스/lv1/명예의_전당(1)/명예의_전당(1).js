/*
 ## 문제 풀이
 1. 명예의 전당에 오르는 값이 담긴 배열을 선언하고, 
 2. 오름차순으로 정렬한다. =>
 - 배열길이가 k를 초과하게되면 배열을 다시 고쳐야한다
 - 오름차순으로 정렬 되어있기 때문에 첫번째 값을 제거하고 맨 앞에 있는 값을 제거할 것
 3. 명예의 전당 배열의 첫번째 값인 가장 최솟값을 answer에 push할 것.

*/
function solution1(k, score) {
  const hallOfFame = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => a - b);

    if (hallOfFame.length > k) hallOfFame.shift();

    answer.push(hallOfFame[0]);
  }

  return answer;
}

/*
 2차 문제풀이! => 훨씬 성능이 좋아졌음!!

 오름 차순으로 해서 shift를 하면 하나씩 땡겨야하기 때문에 시간 복잡도가 O(n)이 됨..
 따라서 내림차순으로 하고 뒤에 있는 값을 pop해보기! => 해당 부분 시간 복잡도 O(1)이 됨
*/

function solution2(k, score) {
  const hallOfFame = [];
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    hallOfFame.push(score[i]);
    hallOfFame.sort((a, b) => b - a); // 내림차순 정렬 (가장 작은 값이 맨 뒤)

    if (hallOfFame.length > k) hallOfFame.pop(); // 맨 뒤 요소 제거

    answer.push(hallOfFame[hallOfFame.length - 1]); // 현재 명예의 전당 최하위 점수
  }

  return answer;
}

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

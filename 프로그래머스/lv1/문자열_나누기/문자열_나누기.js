/*
  문제 풀이!!  
  s.length > 0 => s를 slice로 하나씩 자르지말고, 인덱스 값으로 해결하기!!

  x 즉 타겟문자를 index로 선택하여 선언하고
  index 부터 계속 돌며 탐색하기!
  x인 값과, x 이외의 개수를 계산하고 같다면 break하여 중단하고,
  자른 문자열을 하나씩 나타내는 것이 아닌 분해한 문자열의 !!개수!! 이기 때문에 count값으로 관리하며 count++해주기!!

*/

function solution(s) {
  let index = 0; // s를 탐색하기 위해 필요한 인덱스 값
  let count = 0; // 분해한 문자열의 개수 카운팅

  // 다시 0 인덱스부터가 아닌 진행되는 인덱스 값부터 실행하기 위해 필요
  while (index < s.length) {
    let xCount = 0;
    let notXCount = 0;
    let x = s[index];

    while (index < s.length) {
      if (s[index] === x) xCount++; // 타겟이 된 x 문자의 개수
      else notXCount++; // 이외의 문자 개수

      index++;

      if (xCount === notXCount) break;
    }

    count++;
  }

  return count;
}

/*
1. s 문자열을 배열로 바꾸기 위해 문자열을 변형해야 함
2. 각 배열의 길이값을 기준으로 오름차순 정렬해야 함
3. 정렬된 배열 값을 보고 하나씩 추가된 값을 찾기.
4. 그 추가된 값을 순서대로 새로운 배열에 만들어 출력하면 됨
*/

function solution(s) {
  const answer = [];
  const numbers = s.slice(2, -2).split('},{');
  // 앞 문자열  {{ 제거 후, },{ 기준으로 split하여 배열 만들기
  numbers.sort((a, b) => a.length - b.length);

  for (const elements of numbers) {
    const splitNums = elements.split(',');

    for (const num of splitNums) {
      if (!answer.includes(Number(num))) {
        answer.push(Number(num));
      }
    }
  }

  return answer;
}

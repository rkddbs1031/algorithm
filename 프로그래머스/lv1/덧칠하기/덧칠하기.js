/*
## 풀이 
매개변수 n은 굳이 사용하지 않아도 되는 문제풀이!
최소 칠한 횟수만 구하면 되기 때문에 count로 풀이

- 칠해야하는 section을 하나씩 돌면서  m - 1를 더해주며 section[i]부터 + m - 1까지 더했다는 위치를 저장해두기 위해 currentPart 선언
- 만약 currentPart가 section[i] 보다 크다면 즉 이미 칠하고 난 다음의 공간이라면 카운팅 pass!
- count return~!
*/
function solution(n, m, section) {
  let count = 0;
  let currentPart = 0;

  for (let i = 0; i < section.length; i++) {
    if (section[i] > currentPart) {
      currentPart = section[i] + m - 1;
      count++;
    }
  }

  return count;
}

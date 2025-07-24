/*

### Greedy 탐욕법 !!
❓ “작은 수가 큰 수한테만 빌려줄 수 있다”
→ 큰 수부터 정렬해서 순회

❓ “앞번호만 빌려줄 수 있다”
→ 작은 수부터 순회

❓ “최대한 많은 학생이 듣도록”
→ 한 번 빌려주면 가장 가까운 사람한테 우선 빌려야 함
→ 그래서 정렬이 중요

## 문제 풀이
1. reserve와 lost 중복을 제거한다.
- 빌려줄 수 있는 사람이 도난 당했다면 한 벌 밖에 남지 않기 때문에 빌려주지 못함.
- overlap: 여별을 가지고 있지만 도난 당한 사람 즉, 내옷이 하나 남았기 때문에 빌려주지 않아도 되며, 옷을 입을 수 있는 사람으로 확보됨.
- realLost : 잃어버린 사람 중에서 옷을 가지고 있지 않은 사람 즉, 진짜 잃어버려서 빌려야하는 사람
- realReserve : 빌려줄 수 있는 사람 중에서 도난당하지 않은 사람 즉, 진짜 빌려줄 수 있는 사람
2. 최종 수 계산
- 총 인원수  - 도난당했지만 빌리지 못한 사람 수!


## 생각한 로직
1. realLost는 탐색을 위해 Set으로 
2. 최대한 많은 사람이 빌려야 하기 때문에 빌려줄수 있는 사람 오름차순으로 정렬
3. 빌려줄 수 있는 사람의 앞번호 혹은 뒷번호가 realLost에 있다면  realLost에서 제거하고
4. 최종적으로 못빌려입는 사람의 번호만 남겨져 있는 realLost를 총 인원수에서 빼면 됨.

*/

/*
### 2. 문제 풀이 성공!!
*/
function solution(n, lost, reserve) {
  const overlap = lost.filter((l) => reserve.includes(l));
  let realLost = new Set(lost.filter((l) => !overlap.includes(l)));
  let realReserve = reserve
    .filter((r) => !overlap.includes(r))
    .sort((a, b) => a - b);

  for (let r of realReserve) {
    if (realLost.has(r - 1)) {
      realLost.delete(r - 1);
    } else if (realLost.has(r + 1)) {
      realLost.delete(r + 1);
    }
  }

  return n - realLost.size;
}

/*



### 1. 정확성 93.3... 실패!! ㅜㅜ

function solution(n, lost, reserve) {
  const overlap = lost.filter((l) => reserve.includes(l));
  let realLost = lost.filter((l) => !overlap.includes(l));
  let realReserve = reserve.filter((r) => !overlap.includes(r));

  for (let r of realReserve) {
    if (realLost.includes(r - 1)) {
      realLost = realLost.filter((l) => l !== r - 1);
    } else if (realLost.includes(r + 1)) {
      realLost = realLost.filter((l) => l !== r + 1);
    }
  }

  return n - realLost.length;
}
*/

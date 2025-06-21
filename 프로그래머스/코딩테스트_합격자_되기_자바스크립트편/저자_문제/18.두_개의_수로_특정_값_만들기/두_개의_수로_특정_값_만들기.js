/*

1. 하나의 숫자를 고른 다음 그 숫자를 더했을 때 target이 되는 수가 arr에 있는 지 확인해볼 것
for문 활용해서 각 원소를 더해서 찾기
=> 하지만 배열의 값이 커진다면 시간 복잡도가 O(n²)이므로 통과되지 않을 수 있음 ㅜㅜ

공간 복잡도: O(n²)
*/
function solution(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return true;
    }
  }
  return false;
}

/*

2. 해시 이용해서 풀기
*/

function countSort(arr, k) {
  const hasTable = new Array(k + 1).fill(0);
  for (const num of arr) {
    if (num <= k) {
      hasTable[num] = 1;
    }
  }

  return hasTable;
}

function solution2(arr, target) {
  const hasTable = hasTable(arr, target);

  for (const num of arr) {
    const complement = target - num; // num + complement === target

    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hasTable[complement] === 1
    ) {
      return true;
    }
  }

  return false;
}

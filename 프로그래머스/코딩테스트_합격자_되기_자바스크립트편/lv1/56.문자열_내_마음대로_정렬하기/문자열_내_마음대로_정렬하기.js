function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1;
    } else {
      return a[n] > b[n] ? 1 : -1;
    }
  });
}

/*
N은 strings의 길이, sort 함수의 시간 복잡도 함께 고려 => O(NlogN)
*/

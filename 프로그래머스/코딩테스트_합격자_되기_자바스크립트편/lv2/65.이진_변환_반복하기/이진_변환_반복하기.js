function solution(s) {
  let removeZeroCount = 0;
  let conversionCount = 0;

  while (s.length > 1) {
    let c = [...s].filter((str) => str === '1').length; // 0 제거 후 길이

    removeZeroCount += s.length - c;
    s = c.toString(2);
    conversionCount++;
  }

  return [conversionCount, removeZeroCount];
}

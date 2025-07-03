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

// 재귀함수로 변경
function solution2(s) {
  let removeZeroCount = 0;
  let conversionCount = 0;

  function binaryTransform(str) {
    if (str === '1') return;

    const c = [...str].filter((ch) => ch === '1').length;
    removeZeroCount += str.length - c;
    conversionCount++;

    binaryTransform(c.toString(2));
  }

  binaryTransform(s);
  return [conversionCount, removeZeroCount];
}

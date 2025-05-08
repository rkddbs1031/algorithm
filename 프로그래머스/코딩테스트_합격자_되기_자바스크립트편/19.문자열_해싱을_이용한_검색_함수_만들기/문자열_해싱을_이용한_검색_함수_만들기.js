// 다항식 해시 즉, 문자열을 숫자로 바꾸는 공식
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hasValue = 0;

  for (let i = 0; i < str.length; i++) {
    hasValue = (hasValue * p + str.charCodeAt(i)) % m; // 아스키코드값을 반환
  }

  return hasValue;
}

function solution(stringList, queryList) {
  // queryList있는 문자열이 stringList에 있는지? => 해시 테이블 이용해야함.
  const hasList = stringList.map((str) => polynomialHash(str));

  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);

    if (hasList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

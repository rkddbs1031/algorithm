/*
    discount.length - 10을 하는 이유는 슬라이딩 윈도우의 끝이 배열 범위를 벗어나지 않게 하기 위해서!
    예를들어 discount.length가 14라고 했을 때  i = 4 → discount[4] ~ discount[13] 이렇게  돌게 되는데,
    i가 5가 되면 i = 5 → discount[5] ~ discount[14] 일것이고 discount[14]는 없기때문에 범위 벗어나는 오류 발생!
  */

function solution(want, number, discount) {
  const wantObj = {}; // 사려고 하는 품목과 품목 개수 obj
  for (let i = 0; i < want.length; i++) {
    wantObj[want[i]] = number[i];
  }

  let dayCount = 0;

  for (let i = 0; i <= discount.length - 10; i++) {
    const discountSlice = discount.slice(i, i + 10); // 배열
    const discountObj = {};

    for (let item of discountSlice) {
      discountObj[item] = (discountObj[item] || 0) + 1;
    }

    let isMathch = true;

    for (let item in wantObj) {
      if (discountObj[item] !== wantObj[item]) {
        isMathch = false;
        break;
      }
    }

    if (isMathch) dayCount++;
  }

  return dayCount;
}

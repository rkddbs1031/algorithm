/** 실패한 문제풀이
 * 이렇게되면 올림한게 (ex, 6층의 경우 10층으로 바꾸고(+4), 10층에서 -10으로(+1)한 것) 고려되지 않아 실패ㅜㅜ
 */
function solution1(storey) {
  if (storey <= 5) return storey;

  let count = 0;
  const transferString = storey.toString();

  for (let i = 0; i < transferString.length; i++) {
    const mod = transferString[i] % 10;

    count += mod > 5 ? 10 - mod : mod;
  }
  console.log(count);
}

/**
 * ## 통과한 문제 풀이
 * - storey을 업데이트하면서 0이되면 종료하게끔 진행
 * - 10으로 계속 나누면서 나눈 나머지가 6 이상이면 올림으로 하고, 아니면 내림으로 진행 ex) 16층 -> 20층 만들기 (16 % 10 > 5 => +4)
 *   - 그리고 올림이라면 다음 자리수 +1 적용 까먹지 않기! => Math.floor(storey / 10) + 1
 * - 5 미만이면 니눈 값으로 층 내리기
 * - 5라고 한다면 그 다음 자리수 체크해서 올림,내림 하기
 *   - 예를들어 255라고 한다면 올림하는게 이득
 *   - 245라고 한다면 내림해서 240 만드는 것이 이득
 */

function solution(storey) {
  if (storey <= 5) return storey;

  let count = 0;
  while (storey > 0) {
    let mod = storey % 10;

    if (mod > 5) {
      count += 10 - mod;
      storey = Math.floor(storey / 10) + 1; //올림 적용
    } else if (mod < 5) {
      count += mod;
      storey = Math.floor(storey / 10);
    } else {
      // 5인 경우
      // 그 다음 자리수가 5 이상이면  올림하는게 이득 ex) 255
      let next = Math.floor(storey / 10) % 10;

      if (next >= 5) {
        count += 10 - mod;
        storey = Math.floor(storey / 10) + 1; //올림 적용
      } else {
        count += mod;
        storey = Math.floor(storey / 10);
      }
    }
  }

  return count;
}

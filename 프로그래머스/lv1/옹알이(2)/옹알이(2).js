/* 

## 문제 풀이!!

1.say = ['aya', 'ye', 'woo', 'ma'] 를 기준으로

2. 각 단어 b에 대해
- (1) say 중 하나라도 s.repeat(2)가 있으면 break → 탈락
- (2) 그렇지 않다면 b를 say 기준으로 하나씩 지워봄 
  - 여기서 주의해야할 점!!!! 하나씩 지운 문자열들의 조합으로 인해 say에 포함되지 않게 해야함!!
- (3)다 지우고 빈 문자열만 남았다면 count++

*/

function solution(babbling) {
  const say = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let b of babbling) {
    for (let s of say) {
      // 1. 연속 발음된 문자 거르기
      if (b.includes(s.repeat(2))) {
        break;
      }

      // 2. 연속 발은 문자 거른 후 say 기준으로 하나씩 지우기
      b = b.split(s).join(' '); // 공백 있게 해야함! => 공백 없이 문자열들이 조합되다보면 say에 포함된 문자로 조합될 수 있기 때문에
    }

    if (b.split(' ').join('').length === 0) count++;
  }
  return count;
}

// 2. 정규식으로 풀기!
function solution2(babbling) {
  const regex = /^(aya|ye|woo|ma)+$/;

  return babbling.filter((b) => {
    if (!regex.test(b)) return false;

    return !/(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/.test(b);
  }).length;
}

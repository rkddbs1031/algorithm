/**
 * ## 문제 풀이
 * 1. s를 하나씩 조회하기 위해 문자열을 배열로 변경 뒤 map으로 새로운 배열 생성 진행
 * 2. 해당 문자를 아스키코드로 전환하여 비교하기
 * - 소문자 a~z는 65~90번까지이고, 대문자 A~Z는  97~122까지이며, 알파뱃 수는 26가지가 된다.
 * - 문자를 charCodeAt을 활용하여 아스키코드로 변환하고 빈 공백이 나오면 그대로 return
 * - z에서 n번 밀면 다시 a부터 진행되어야하기 때문에 현재 아스키코드의 인덱스를 구하고 (0~25)
    n만큼 더한 뒤 다시 알파벳 범위로 (0~25) 순환
 * 3. 밀어진 배열을 문자열로 join 
 */

function solution(s, n) {
  return [...s]
    .map((char) => {
      const code = char.charCodeAt();

      if (char === ' ') return char;

      const base = code >= 97 ? 97 : 65;
      return String.fromCharCode(((code + n - base) % 26) + base);
    })
    .join('');
}

// if(code >= 65 && code <= 90 ) {
//     return String.fromCharCode((code + n - 65) % 26 + 65);
// } else if (code >= 97 && code <= 122) {
//     return String.fromCharCode((code + n - 97) % 26 + 97);
// }

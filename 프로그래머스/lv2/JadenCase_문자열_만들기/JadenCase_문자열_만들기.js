/**
 *
 * 에러 뜬 코드!
 * "  hello   world" 와 같이 word자체가 ''빈문자인경우 word[0]은 undefined일 것이고, 그것을 toUpperCase 하려고 하다보니 에러가 나타남
 * 개선필요!
 *
 */

// function solution1(s) {
//   return s
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

/**
 *
 * ## 문제풀이
 * 1. 공백 단위로 split 후 새로운 배열을 나타내기 위해 map 활용
 * 2. "  hello   world"와 같이 단어들 사이에서만이 아닌 공백으로 이루어진곳이 있을 수 있기 때문에 word[0]만 체크하는 것이 아닌
 * word도 빈문자열인지 체크하기
 * 3. 그외의 문자열을 첫문자는 (word[0]) 대문자로, 그뒤의 문자는 소문자로 변환.
 * 4. 해당 배열을 join하여 하나의 문자열로 만들기
 *
 */

function solution(s) {
  return s
    .split(' ')
    .map((word) => {
      if (word[0] === '' || word === '') return '';
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

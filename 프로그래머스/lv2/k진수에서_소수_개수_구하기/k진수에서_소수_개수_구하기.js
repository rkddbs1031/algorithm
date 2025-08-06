/**
 * ## 문제 풀이
 * 1. n을 k진수로 변환하고 0을 기준으로 나눈 새로운 배열을 만든다.
 * 2. 소수이면서 빈문자열이 아닌 수를 필터링해 해당 배열의 개수를 출력한다.
 * - 소수 판별하는 함수 isPrime는 √n 까지 반복하며 소수인지 체크.
 * - 빈배열을 체크하는 경우는 예를들어 k진법으로 바꾼 수가 '1001'라면 0으로 split했을 때 ["1", "", "1"]가 되며 빈문자열이 생기므로 해당 조건을 고려해야함
 */

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(n, k) {
  const numArr = n.toString(k).split('0');

  return numArr.filter((num) => num !== '' && isPrime(+num)).length;
}

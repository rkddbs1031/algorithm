/**
 *
 * ## 문제 풀이
 * 1. arrayA와 arrayB의 최대공약수를 각자 구한다.
 * 2. a의 최대 공약수로 arrayB가 나누어 떨어지는 것이 있는지, 반대로 b의 최대공약수로 arrayA가 나누어 떨어지는 것이 있는지 확인한다.
 * 3. 나누어 떨어지지 않는다면 해당 값이 나눌 수 없는 양의 정수!
 * 4. 그 값 두개를 비교해서 최대값을 구한다.
 *
 */

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const gcdArray = (array) => array.reduce((g, x) => gcd(g, x));

const validDividor = (gcd, arr) => {
  if (gcd === 1) return false;

  for (let a of arr) {
    if (a % gcd === 0) return false;
  }

  return true;
};

function solution(arrayA, arrayB) {
  const gcdA = gcdArray(arrayA);
  const gcdB = gcdArray(arrayB);

  let a = 0,
    b = 0;

  if (validDividor(gcdA, arrayB)) a = gcdA;
  if (validDividor(gcdB, arrayA)) b = gcdB;

  return Math.max(a, b);
}

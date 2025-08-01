/**
 * ## 문제 풀이
 * 1. n을 2진법으로 변환후 1의 개수를 구한다.
 * 2. n을 1씩 더해 다음 큰 수도 이진법으로 변환후 1의 개수를 구한다.
 * 3. while로 반복하며 최초의 1의 개수가 같은 경우가 생길 때 while문을 끝내고 해당 다음 큰 숫자를 return 한다.
 *
 */

function solution(n) {
  const binary = n.toString(2);
  const countOne = [...binary].filter((c) => c === '1').length;

  while (true) {
    const nextBinary = (++n).toString(2);
    const nextCountOne = [...nextBinary].filter((c) => c === '1').length;
    if (countOne === nextCountOne) {
      return n;
      break;
    }
  }
}

/**
 * countOne 개선 => const countOne = binary.split('1').length - 1;
 * nextCountOne 개선 => const nextCountOne = nextBinary.split('1').length - 1;
 */

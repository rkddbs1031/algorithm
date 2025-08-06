/**
 *
 * ## 문제풀이
 * 1. makePairs 함수
 * - 영문으로만 이루어져있는 문자만 담긴 배열 생성.
 * - 문자열을 영소문자로 변형 후 인덱스로 조회하여 2문자씩 조합한다.
 * - 조합한 문자가 영문으로만 조합되어 있는지 체크 후 그렇다면 arr에 push.
 *
 * 2. 합집합, 교집합 구하기
 * 2-1. getIntersection 함수
 * - 매개변수 배열도 참조 타입이기때문에 원본 변형 안되게 arr2를 copy
 * - indexOf 활용하여 arr1과 arr2의 교집합 구하고, count + 1.
 * - 사용한 원소는 copy 배열에서 제거.
 * 2-2. union
 * - arr1의 길이와 arr2의 길이의 합에서 교집합을 제거하면 합집합.
 *
 */

function makePairs(str) {
  const arr = [];
  str = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    const pair = str[i] + str[i + 1];
    if (/^[a-z]{2}$/.test(pair)) {
      arr.push(pair);
    }
  }
  return arr;
}

function getIntersection(arr1, arr2) {
  const copy = [...arr2]; // 매개변수 배열 참조타입이기에 원본 변형 안되게
  let count = 0;

  for (let el of arr1) {
    const idx = copy.indexOf(el);
    if (idx !== -1) {
      count++;
      copy.splice(idx, 1);
    }
  }

  return count;
}

function solution(str1, str2) {
  const arr1 = makePairs(str1);
  const arr2 = makePairs(str2);

  const intersection = getIntersection(arr1, arr2);
  const union = arr1.length + arr2.length - intersection;

  if (union === 0) return 65536;
  return Math.floor((intersection / union) * 65536);
}

const A = [1, 4, 7, 10];
const B = [1, 2, 5, 7];
const expectedOutput = [1, 1, 2, 4, 5, 7, 7, 10];

const A2 = [1, 4, 5, 8];
const B2 = [2, 3, 6, 7];

const expectedOutput2 = [1, 2, 3, 4, 5, 6, 7, 8];

const A3 = [1, 4, 5, 8, 9, 11];
const B3 = [2, 3, 6, 7];

const expectedOutput3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * [...A, ...B].sort((a, b) => a - b);
 * 이거도 답은 될 수 있지만 시간복잡도에서 많이나감.
 * 따라서 sort 안쓰고 해보기
 */

function mergeSortedArray(a, b) {
  const res = [];

  let i = 0;
  let j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
  }

  // 길이가 다른 경우 남은 arr push하기 위해!
  while (i < a.length) {
    res.push(a[i]);
    i++;
  }

  while (j < b.length) {
    res.push(b[j]);
    j++;
  }

  return res;
}

const output = mergeSortedArray(A3, B3);

console.log(output);

/*

1. 두 행렬을 먼저 곱하고 
2. 그 결과값을 전치 행렬 계산할 것

*/
function multiplyMatrices(matrix1, matrix2) {
  // 3 X 3으로 정해져있긴 하지만 나중을 위해 n, m으로 정해보기.

  const rowsA = matrix1.length;
  const colsA = matrix1[0].length;
  const colsB = matrix2[0].length;

  const result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

  // 행렬 곱셈 수행
  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrix1[i][k] * matrix2[k][j];
      }
    }
  }

  return result;
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = Array.from({ length: cols }, () => Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
}

function solution(matrix1, matrix2) {
  const multiplied = multiplyMatrices(matrix1, matrix2); // 행렬 곱셈
  const transposed = transposeMatrix(multiplied); // 전치 행렬

  return transposed;
}

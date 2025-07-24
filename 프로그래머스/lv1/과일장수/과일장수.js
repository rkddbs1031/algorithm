/**
 * ## 문제풀이
 *
 * 1. m만큼 상자에 담고 m만큼 담지 못하면 해당 사과는 제외시킴.
 * 2. m만큼 소분한 사과 중 가장 점수가 낮은 사과의 점수 * m이 상자의 가격
 * 3. 해당 상자의 가격의 최대 합을 구한다.
 *
 *
 * 따라서 내가 생각한 로직
 * 1. 내림차순으로 score 정렬
 * 2. 성능을 위해 splice로 하나씩 자르지 않는 대신, 조회할 인덱스의 값을 기억하고 m만큼 증가시킨다.
 * 3. 0~3까지의 사과라고 가정하면, 내림차순 했기 때문에  i + m - 1의 인덱스 값 즉 그 4개까지 조회하고 마지막에 있는 사과가 가장 적은 점수를 가지는 사과일 것
 * 4. 해당 사과를 이용해 그 상자의 가격 구하기
 * 5. while문을 활용해서 조회할 첫번째 인덱스 값 + 소분할 사과의 개수인 m한 값이 score.length보다 큰 것은 m 만큼 담지 못한다는 것이기 때문에 이와 같이 나오면 실행 중지
 */

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let price = 0;
  let current = 0;

  while (current + m <= score.length) {
    const minScore = score[current + m - 1];
    price += minScore * m;
    current += m;
  }

  return price;
}

/**
 * 처음 했던 코드는 아래와 같음
 * while (score.length >= m) {
 *  let spliced = score.splice(0, m);
 *  price += Math.min(...spliced) * m;
 * }
 *
 * 하지만 성능 문제로 실패! ㅜㅜ
 */

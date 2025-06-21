function find(parents, x) {
  if (parents[x] === x) {
    return x;
  }

  parents[x] = find(parents, parents[x]);
  return parents[x];
}

function union(parents, x, y) {
  /*
    x가 속한 루트 노드 찾고
    y가 속한 루트 노드 찾고
    y가 속한 집합을 x가 속한 집합에 합침
*/

  const root1 = find(parents, x);
  const root2 = find(parents, y);
  parents[root2] = root1;
}

function solution(k, operations) {
  const parents = Array.from({ length: k }, (_, i) => i);
  let n = k;

  for (const operation of operations) {
    if (operation[0] === 'u') {
      //union operation[1] operation[2]에 대해 union 연산 실행
      union(parents, operation[1], operation[2]);
    } else if (operation[0] === 'f') {
      //find operation[1] 의 루트노드 찾기
      find(parents, operation[1]);
    }
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size;
  }

  return n; // 집합의 개수
}

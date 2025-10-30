/**
 * 이것도 두포인트를 둬서 특정 숫자 즉 합k를 맞추는 경우의 수를 다 구하는것!
 * 그 경우의 수를 저장해두는 건 인덱스 값으로 start, end 하면 됨!
 * 그 경우의 수 배열인 candidates를 조건에 맞게 길이가 짧은 순으로 정렬한 다음 candidates 첫번째 인덱스 값을 return
 *
 */
function solution(sequence, k) {
  let start = 0,
    end = 0;
  let sum = sequence[0];
  const candidates = []; // 인덱스 값을 저장해둔 배열

  while (start <= sequence.length && end <= sequence.length) {
    if (sum === k) {
      candidates.push([start, end]);
      sum -= sequence[start++];
    } else if (sum < k) {
      end++;
      if (end < sequence.length) sum += sequence[end];
    } else {
      sum -= sequence[start++];
    }
  }

  candidates.sort((a, b) => {
    const lenA = a[1] - a[0];
    const lenB = b[1] - b[0];
    if (lenA === lenB) return a[0] - b[0]; // 길이 같으면 앞쪽
    return lenA - lenB; // 짧은 게 우선
  });

  return candidates[0];
}

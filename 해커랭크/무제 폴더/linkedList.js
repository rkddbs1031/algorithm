class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function solution(values) {
  // 1. 배열 -> 연결 리스트
  if (values.length === 0) return [];

  let head = new Node(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new Node(values[i]);
    current = current.next;
  }

  // 2. 연결 리스트 뒤집기
  let prev = null;
  current = head;

  while (current) {
    let next = current.next; // 저장
    current.next = prev; // 뒤
    prev = current; // 프
    current = next; // 커
  }

  const result = [];
  current = prev;
  while (current) {
    result.push(current);
    current = current.next;
  }

  return result;
}

function solution(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1; // 바닥 시작점.
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
}

/**
 * 1번 => 1 => dp[1]
 * 2번 =>  1번 점프 -> 1에서 1점프 =>  dp[i-1] + 1; 1가지
 * 2번 점프 => 바닥에서 -> 2 점프 => dp[i-2] + 1 1가지
 * 즉 2가지
 * 3번 => 1번 점프 -> 2에서 1점프  dp[i-1] + 1 3가지
 */

function solution(n) {
  let answer = [];

  function hanoi(num, from, to, via) {
    if (num === 1) return answer.push([from, to]);

    hanoi(num - 1, from, via, to);
    answer.push([from, to]);
    hanoi(num - 1, via, to, from);
  }

  hanoi(num, 1, 3, 2);
  return answer;
}

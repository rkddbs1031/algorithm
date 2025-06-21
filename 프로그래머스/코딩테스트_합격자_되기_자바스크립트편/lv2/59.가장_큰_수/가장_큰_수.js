function solution(numbers) {
  numbers.sort((a, b) => {
    const t1 = a.toString() + b.toString();
    const t2 = b.toString() + a.toString();
    return t1 > t2 ? -1 : 1;
  });

  // 0인 경우도 check!
  const answer = numbers.join('');
  return Number(answer) === 0 ? '0' : answer;
}

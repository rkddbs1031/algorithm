function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => b - a);

  citations.forEach((c, i) => {
    if (c >= i + 1) answer++;
  });

  return answer;
}

/*
h편 이상의 논문이 h번 이상 인용되고, 나머지 논문은 h번 이하 이용한 
그 h가 답임...
*/

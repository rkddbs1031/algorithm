function solution(files) {
  const answer = [];
  for (const file of files) {
    let [fileName, head, number] = file.match(/^(\D+)([0-9]+)(.*)$/);
    answer.push([fileName, head.toLowerCase(), +number]);
  }

  answer.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
  });

  return answer.map((a) => a[0]);
}

/*
정규식.. ㅠㅠ

^ : 문자열 시작
(\D+) : 숫자가 아닌 문자들을 1개 이상 (head)
([0-9]+) : 숫자들 1개 이상 (number)
(.*) : 그 뒤에 오는 모든 문자 0개 이상 (TAIL)	
$ : 문자열의 끝
*/

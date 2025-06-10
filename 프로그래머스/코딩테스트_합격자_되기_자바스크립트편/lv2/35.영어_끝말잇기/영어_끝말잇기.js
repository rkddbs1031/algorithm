function solution(n, words) {
  let useWords = new Set(); // 이미 사용한 단어를 저장하는 공간 Set
  let prevWord = words[0][0]; // 이전 단어의 끝 글자

  for (let i = 0; i < words.length; i++) {
    const currWord = words[i];

    if (useWords.has(currWord) || prevWord !== currWord[0]) {
      // 있는 단어거나, 첫글자가 이전 단어 끝글자와 일치하지 않는다면
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    // 잘 됐으므로 넘어가는것
    useWords.add(currWord);
    prevWord = currWord.slice(-1);
  }

  return [0, 0]; // 아무런 문제없이 통과했을 때
}

/*
🚨 주의!!
 obj로 각 사람의 단어 목록을 만든 건 좋아 보이지만, 
 결국엔 단어 순서대로 하나씩 체크해야 하니까 words[i]로 충분하다!!

*/

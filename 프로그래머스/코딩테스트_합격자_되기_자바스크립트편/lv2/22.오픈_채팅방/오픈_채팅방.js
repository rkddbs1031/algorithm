function solution(record) {
  const answer = [];
  const uid = {};

  for (line of record) {
    const [action, id, nickname] = line.split(' ');

    if (action !== 'Leave') {
      uid[id] = nickname;
    }
  }

  for (line of record) {
    const [action, id, nickname] = line.split(' ');

    if (action === 'Enter') {
      answer.push(uid[id] + '님이 들어왔습니다.');
    } else if (action === 'Leave') {
      answer.push(uid[id] + '님이 나갔습니다.');
    }
  }

  return answer;
}

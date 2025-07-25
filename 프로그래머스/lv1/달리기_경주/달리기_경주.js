/**
 *
 * ## 문제 풀이
 * 1. 현재 순위를 이름 별로 저장하기
 * 2. callings을 하나씩 보면서 바뀌기 전 순위와 이름이 불린 사람 앞에 있는 사람을 참고해서 players 를 업데이트하고, 순위도 업데이트 하기
 *
 */

function solution(players, callings) {
  const rank = {};
  players.forEach((p, i) => (rank[p] = i + 1));

  for (let player of callings) {
    const curRank = rank[player];
    const frontPlayer = players[curRank - 2];

    // 배열 위치 swap
    players[curRank - 2] = player;
    players[curRank - 1] = frontPlayer;

    // 순위 업데이트
    rank[player] = curRank - 1;
    rank[frontPlayer] = curRank;
  }

  return players;
}

/**
 *
 * 인덱스 선택하는게 헷갈리니까 순위 자체를 0부터 하는 방법도 있음!
 *
 */

function solution2(players, callings) {
  const rank = {};
  players.forEach((p, i) => (rank[p] = i));

  for (let player of callings) {
    const curRank = rank[player];
    const frontPlayer = players[curRank - 1];

    // 배열 위치 swap
    players[curRank - 1] = player;
    players[curRank] = frontPlayer;

    // 순위 업데이트
    rank[player]--;
    rank[frontPlayer]++;
  }

  return players;
}

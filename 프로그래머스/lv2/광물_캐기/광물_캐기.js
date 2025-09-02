/*
핵심: 피로도가 많이 드는 블록에는 좋은 곡괭이를, 덜 드는 블록에는 나쁜 곡괭이를 배치!

1. 하나의 곡괭이로 5개를 연속으로 캐야하기 때문에 -> 5개씩 그룹핑하여 진행하기
2. 각 그룹의 가중치 계산 -> 가장 피로도가 큰 돌 곡괭이로 한다고 가정해서 계산 먼저해보기 -> 그 이유는 그 합계가 가장 큰 그룹을 가장 피로도가 적은 곡괭이로 배치하기 위해서
- 다이아 * 25 + 철 * 5 + 돌 * 1
3. 곡괭이를 다 사용했음에도 광물이 남아있다 -> 그래도 중단.
*/

function solution(picks, minerals) {
  // 1. 가지고 있는 곡괭이 총 개수
  let pickCount = picks.reduce((acc, cur) => acc + cur, 0);

  // 2. 곡괭이로 캘 수 있는 광물까지만 제한
  minerals = minerals.slice(0, pickCount * 5);

  // 3. 광물 5개 단위로 그룹핑
  const groupCount = Math.ceil(minerals.length / 5);
  const groups = [];
  for (let i = 0; i < groupCount; i++) {
    groups.push(minerals.slice(i * 5, i * 5 + 5));
  }

  // 4. 그룹 가중치 계산 후 가중치 내림차순 정렬 -> 높은 그룹에 좋은 곡괭이 배치하기 위해서
  const groupScores = groups.map((group, idx) => {
    let score = 0;
    for (let mine of group) {
      if (mine === 'diamond') score += 25;
      else if (mine === 'iron') score += 5;
      else score += 1;
    }

    return { idx, minerals: group, score };
  });

  groupScores.sort((a, b) => b.score - a.score);

  const fatigueTable = {
    diamond: [1, 1, 1],
    iron: [5, 1, 1],
    stone: [25, 5, 1],
  };

  const mineIdx = { diamond: 0, iron: 1, stone: 2 };

  let score = 0;

  for (let group of groupScores) {
    let { minerals } = group;

    const pick = setPick(picks);
    if (pick === null) break;

    for (let mine of minerals) {
      score += fatigueTable[pick][mineIdx[mine]];
    }
  }

  return score;
}

// 곡괭이 구하는 로직
function setPick(picks) {
  if (picks[0] > 0) {
    picks[0]--;
    return 'diamond';
  } else if (picks[1] > 0) {
    picks[1]--;
    return 'iron';
  } else if (picks[2] > 0) {
    picks[2]--;
    return 'stone';
  } else {
    return null;
  }
}

function solution(genres, plays) {
  const genresObj = {}; // 장르별 총 재생수
  const playsObj = {}; // 장르별 플레이 목록 저장

  genres.forEach((genre, i) => {
    genresObj[genre] = (genresObj[genre] || 0) + plays[i];

    if (!playsObj[genre]) playsObj[genre] = [];
    playsObj[genre].push([i, plays[i]]);
  });

  const sortedGenres = Object.keys(genresObj).sort(
    (a, b) => genresObj[b] - genresObj[a]
  ); // 1.장르로 우선순위 결정 : 내림차순

  const answer = [];
  // 장르별로 내림차순 정렬 후, 최대 2개씩 선택
  for (let genre of sortedGenres) {
    // pop, classic
    const sortedPlays = playsObj[genre];
    sortedPlays.sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1]; // 재생된 수 대로 내림차순
      return a[0] - b[0]; // 같다면 고유번호가 낮은 순으로 정렬
    });
    // playObj[genre]  => [ [], [], []]
    answer.push(...sortedPlays.slice(0, 2).map((play) => play[0]));
  }

  return answer;
}

/*

genresObj  => { classic: 1450, pop: 3100}
playObj =>
{ 
    classic : [ [0, 500], [2, 150], [3,800] ],
    pop: [[1,600], [4, 2500]]
}

sortedGenres => [pop, classic]

*/

/**
 * 6:10 ~ 6: 15
 *
 * ## 나의 문제풀이
 * 1. 이름별 그리움 점수를 객체로 매핑 => obj
 * 2. 각 사진마다 등장인물의 점수를 합산하여 배열로 반환 => map, reduce 활용
 */
function solution(name, yearning, photo) {
  const obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  return photo.map((p) => p.reduce((sum, name) => sum + (obj[name] || 0), 0));
}

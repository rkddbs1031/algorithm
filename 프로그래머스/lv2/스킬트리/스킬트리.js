/**
 * ## 문제풀이
 * 1. skill 순서에 없는 스킬은 제외되기 때문에 실행할 스킬 리스트를 필터링한다.
 * 2. startsWith활용하여 필터링한 스킬 문자열이 skill 순서에 맞게 이루어지는지 체크
 *
 */
function solution(skill, skill_trees) {
  let count = 0;
  for (let tree of skill_trees) {
    let filtered = tree
      .split('')
      .filter((t) => skill.includes(t))
      .join('');
    if (skill.startsWith(filtered)) count++;
  }
  return count;
}

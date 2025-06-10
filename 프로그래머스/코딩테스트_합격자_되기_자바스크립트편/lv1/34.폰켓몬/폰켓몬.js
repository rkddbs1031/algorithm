function solution(nums) {
  const 총_개수 = nums.length;
  const 폰켓몬_종류 = new Set(nums).size;
  const 가져_갈_수_있는_개수 = 총_개수 / 2;

  return Math.min(폰켓몬_종류, 가져_갈_수_있는_개수);
}

/**
 * ## 문제 풀이
 * 1. 마지막 공격시간을 구해서 그 시간까지 하나씩 올라가야하므로 for문으로 진행
 * - 마지막 공격시간은 attacks 배열의 마지막 값의 인데스 0번 데이터
 * 2. 공격있는 경우를 체크해야하기 때문에 시간별 공격력을 저장하는 obj 생성 -> attackObj
 * 3. 공격이 있는 경우
 * - 변화할 체력에 공격력 값을 마이너스, 연속 성공수 초기화
 * - 변화한 체력이 0이하가 되면 그 즉시 -1을 return
 * 4. 공격 없는 경우
 * - 체력에 회복량을 더하고, 연속 성공에 달성했을 경우 추가 회복량까지 더한다.
 * - 여기서 최대 체력을 넘을 수는 없음 -> Math.min()
 *
 */

function solution(bandage, health, attacks) {
  let changedHealth = health;
  let sequenceSuccess = 0;
  const [castTime, perSecHeal, bonusHeal] = bandage;

  // 1. attack 시간별 공격력 저장
  const attackObj = {};
  for (let attack of attacks) {
    attackObj[attack[0]] = attack[1];
  }
  // 2. 마지막 공격 시간
  const lastTime = attacks[attacks.length - 1][0];

  for (let i = 1; i <= lastTime; i++) {
    // 공격 있을 때
    if (attackObj[i]) {
      changedHealth -= attackObj[i];
      sequenceSuccess = 0;

      if (changedHealth <= 0) return -1; // 즉시
    } else {
      // 공격 없을 때
      sequenceSuccess++; // 연속 성공 횟수 추가하고
      changedHealth += perSecHeal;

      if (sequenceSuccess === castTime) {
        changedHealth += bonusHeal;
        // 연속 성공 횟수 달성 했으면 초기화
        sequenceSuccess = 0;
      }

      changedHealth = Math.min(health, changedHealth);
    }
  }

  return changedHealth;
}

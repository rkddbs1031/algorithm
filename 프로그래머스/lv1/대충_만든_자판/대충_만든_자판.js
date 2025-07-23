/*

## 문제 풀이

1. 문자별 최소 누름 수를 keymaps에 저장
2. targets을 하나씩 비교하며, keymaps에 저장된 누름수를 하나씩 더할 것!
- 여기서 Keymaps에 문자가 없다면 -1을 리턴하고, 있다면 계속 count를 더해서 해당 count를 return!

*/

function solution(keymap, targets) {
  const keymaps = {};
  for (let key of keymap) {
    for (let i = 0; i < key.length; i++) {
      const targetKey = key[i];
      const press = i + 1;

      if (!keymaps[targetKey] || keymaps[targetKey] > press) {
        keymaps[targetKey] = press;
      }
    }
  }

  return targets.map((target) => {
    let count = 0;

    for (let t of target) {
      if (keymaps[t]) {
        count += keymaps[t];
      } else {
        return -1;
      }
    }

    return count;
  });
}

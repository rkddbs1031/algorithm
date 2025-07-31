/*
 * ## 문제풀이
 * 1. 1. 시간을 일단 초단위로 변환하고 시작.
 * 2. commands를 하나씩 조회하기 위해 반복문 적용
 * 3. 현재 위치가 오프닝 구간인지 먼저 체크
 * 4. 오프닝 구간이라면 op_end로 이동
 * 5. 그 다음 command 적용
 * 6. 이동한 위치가 오프닝 구간이면 op_end로 이동
 * 7. 마지막 시간의 시와 분을 2자리수로 변환해야하기 때문에 String으로 변환 후 padStart(2, '0') 적용
 */

function transferTimeToSec(time) {
  const [m, s] = time.split(':').map(Number);
  return m * 60 + s;
}

function solution(video_len, pos, op_start, op_end, commands) {
  let now = transferTimeToSec(pos);
  const opStart = transferTimeToSec(op_start);
  const opEnd = transferTimeToSec(op_end);
  const video = transferTimeToSec(video_len);

  for (let command of commands) {
    if (now >= opStart && now <= opEnd) now = opEnd;

    if (command === 'next') {
      now = Math.min(video, now + 10);
    } else {
      now = Math.max(0, now - 10);
    }

    // 이동 후 오프닝 구간 체크
    if (now >= opStart && now <= opEnd) now = opEnd;
  }

  const mm = String(Math.floor(now / 60)).padStart(2, '0');
  const ss = String(now % 60).padStart(2, '0');

  return `${mm}:${ss}`;
}

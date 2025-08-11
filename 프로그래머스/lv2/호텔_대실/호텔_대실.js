/**
 * ## 문제풀이
 * 1. 먼저 book_time의 체크인 시간이 가장 빠른 순으로 정렬하기
 * 2. 청소시간 포함한 종료시간을 저장할 rooms 선언
 * 3. 해당 book_time을 하나씩 조회하기
 * - 시작, 종료 시간을 분단위로 변환하기
 * - 종료 시간 저장된 배열 rooms를 오름차순으로 정렬하여 가장빨리 비는 방을 찾기
 * - 비교할 rooms가 비어있으면 먼저 해당 종료시간 push
 * - rooms의 길이 1 이상이고, 시작 시간과 하나씩 비교하며 시작 시간이 더 큰 경우
 * 즉, 방의 사용 종료 시간이 현재 예약 시작 시간보다 이르다면 해당 방의 사용 종료 시간을 현재 예약의 종료 시간으로 업데이트한 뒤
 * 빈방을 찾았다고 체크! 빈 방을 찾았으니 더 이상 찾지 않아도 되므로 break.
 * 3. 총 사용된 룸의 개수를 출력
 *
 */
function transferTime(time) {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

function solution(book_time) {
  book_time.sort((a, b) => transferTime(a[0]) - transferTime(b[0])); // 1

  const rooms = []; // 2.

  // 3.
  for (let [checkin, checkout] of book_time) {
    const start = transferTime(checkin);
    const end = transferTime(checkout) + 10;

    rooms.sort((a, b) => a - b);

    let foundEmptyRoom = false;
    if (rooms.length > 0) {
      for (let i = 0; i < rooms.length; i++) {
        if (rooms[i] <= start) {
          rooms[i] = end;
          foundEmptyRoom = true;
          break;
        }
      }
    }

    if (!foundEmptyRoom) rooms.push(end);
  }

  return rooms.length; // 4.
}

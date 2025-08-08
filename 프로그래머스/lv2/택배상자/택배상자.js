/**
 * ## 문제풀이
 * 1. orderIdx는 order에서 싣고자 하는 상자 인덱스로 최종 인덱스값이 트럭에 실은 개수가 됨
 * 2. boxNum는 컨테이너 벨트에서 꺼낼 상자 번호
 * 3. stack은 보조컨테이너 벨트
 * 3. boxNum은 계속해서 패스(stack에 넣는) 혹은 트럭에 실어야하기 때문에 계속 ++가 되고 끝까지 갔을 때 종료
 * 4. boxNum과 택배기사의 순서값에 맞게 order[orderIdx]가 같다면 트럭에 싣고 boxNum 킵고잉
 * 5. 만약 다르다면 stack에 넣고 boxNum 킵고잉
 * 6. stack에 쌓여있고 마지막 택배의 번호가 order[orderIdx]와 같다면 stack 빼기(택배 싣기) + 다음 택배기사 순서를 따라야하기 때문에 orderIdx ++!
 */
function solution(order) {
  const stack = [];
  let orderIdx = 0;
  let boxNum = 1;

  while (boxNum <= order.length) {
    if (boxNum === order[orderIdx]) {
      orderIdx++;
      boxNum++;
    } else {
      stack.push(boxNum);
      boxNum++;
    }

    while (stack.length > 0 && stack[stack.length - 1] === order[orderIdx]) {
      stack.pop();
      orderIdx++;
    }
  }

  return orderIdx;
}

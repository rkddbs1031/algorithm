function solution(enroll, referral, seller, amount) {
  const parentMap = {};
  for (let i = 0; i < enroll.length; i++) {
    parentMap[enroll[i]] = referral[i]; // 1
  }

  const totalAmount = {};
  for (const name of enroll) {
    totalAmount[name] = 0; // 2
  }

  seller.forEach((name, index) => {
    let money = amount[index] * 100;
    let curName = name;

    //3
    while (money > 0 && curName !== '-') {
      const givup = Math.floor(money * 0.1);
      const keep = money - givup;

      totalAmount[curName] += keep;
      money = givup; // 분배해야할 돈
      curName = parentMap[curName]; //분배 받을 다음 target
    }
  });

  return enroll.map((name) => totalAmount[name]);
}

/*
1. enroll으로 추천 트리(parent map) 구조 잡는 것이 우선! => 부모 포인터 맵
- referral을 통해 누가 누구보다 위/아래에 배치되어있는 지를 보면 됨.
- 실제로 "이진 트리"처럼 노드 위치를 배열 인덱스나 깊이로 정렬할 필요는 없음이 포인트!!

2. 각 포인터 노드에 맞는 amount를 객체로 관리하고, 0으로 초기화 시켜둠.

3. seller를 기반으로 수익금 나누기
- 노드가 없다면 ('-') 수익을 안나눠도 됨.
- 분배할 수익금이 1원 이하면 수익을 안나눠도 됨.


4. enroll 순서대로 totalAmount를 매핑 시켜 총 금액을 return
*/

/*
1. parentMap
{
  john: "-",
  mary: "-",
  edward: "mary",
  sam: "edward",
  emily: "mary",
  jaimie: "mary",
  tod: "jaimie",
  young: "edward"
}

2. seller 
["young", "john", "tod", "emily", "mary"]
*/

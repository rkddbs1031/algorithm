function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }

  return true;
}

/*
🚨전체 문자열을 하나씩 비교하는 방식이 아니라 => 복잡도 O ( N 2 ) 으악!
오름차순으로 문자열을 정렬하고 startsWith 함수로 접두사를 찾는다!
*/

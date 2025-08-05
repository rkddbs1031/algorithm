/**
 *
 * ## 문제풀이
 * cacheSize만큼만 cache 배열에 채울 수 있으며, 다 채워졌다면 앞에 원소를 지우고 뒤에 새로운 city값을 넣을 수 있음 -> QUEUE!!!
 * 1. for문을 통해 cities를 하나씩 탐색
 * 2. city 대소문자 구분하지 않으므로 소문자로 변환하여 체크
 * 3. 해당 city가 cache에 있다면 HIT!
 * -> 기존 city에 대한 cache 제거 후 맨 뒤에 push.
 * -> 실행시간 1 더하기
 * 4. cache에 없다면 MISS!
 * -> cache의 길이를 체크하여 캐시크기를 넘는지 체크하고 넘는다면 맨앞 데이터 제거
 * -> cache 맨 뒤에 push
 * -> 실행시간 5 더하기
 *
 */

function solution(cacheSize, cities) {
  const cache = [];
  let time = 0;

  if (cacheSize === 0) return 5 * cities.length;

  for (let city of cities) {
    city = city.toLowerCase();

    if (cache.includes(city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);

      time += 1;
    } else {
      if (cache.length >= cacheSize) cache.shift();

      cache.push(city);
      time += 5;
    }
  }

  return time;
}

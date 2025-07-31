/**
 * ## 문제 풀이
 * 1. termMap으로 유형별 유효기간을 저장
 * - 여기서 유효기간을 string이 아닌 number 타입으로 저장할 수 있게 해야함 (parseInt)
 * 2. privacies의 인덱스 + 1이 번호
 * 2. 모든 날짜를 총 일 수로 계산하여 비교 (dateToDays())
 * 3. 현재 날짜가 개인정보 수집 일자에서 유형에 맞게 유효기간을 더한 값이 보다 크다면 파기해야하는 것.
 */

function solution(today, terms, privacies) {
  const termMap = {};
  for (let term of terms) {
    const [type, month] = term.split(' ');
    termMap[type] = parseInt(month);
  }

  const dateToDays = (dateStr) => {
    const [y, m, d] = dateStr.split('.').map(Number);
    return y * 12 * 28 + m * 28 + d;
  };

  const todayInDays = dateToDays(today);
  let result = [];

  for (let i = 0; i < privacies.length; i++) {
    const [date, type] = privacies[i].split(' ');
    const expireInDays = dateToDays(date) + termMap[type] * 28;

    if (todayInDays >= expireInDays) {
      result.push(i + 1);
    }
  }

  return result;
}

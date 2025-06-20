function repeatChar(num, length) {
  let str = '';
  for (let i = 0; i < length; i++) {
    str += `${num}`;
  }

  return str;
}

function solution(food) {
  const string = [];

  for (let i = 1; i < food.length; i++) {
    let num = Math.floor(food[i] / 2);
    let repeatStr = repeatChar(i, num);
    string.push(repeatStr);
  }
  const joinStr = string.join('');

  return joinStr + '0' + string.reverse().join('');
}

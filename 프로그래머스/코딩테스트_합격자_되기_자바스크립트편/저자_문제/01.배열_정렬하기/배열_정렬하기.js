function solution(arr) {
    return arr.sort((a, b) => a - b);
}

/*
    sort() 메서드
    a에서 b를 뺀 결과 반환.
    1. a가 b보다 앞에 나와야한다면 음수 반환.
    2. a가 b보다 뒤에 나와야한다면 양수 반환.
    3. 위치 변경을 하지 않는다면 0 반환.
*/
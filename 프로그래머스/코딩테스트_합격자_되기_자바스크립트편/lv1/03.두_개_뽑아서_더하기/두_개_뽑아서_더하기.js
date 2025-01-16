function solution(numbers) {
    const answer = []; // 1
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < i; j++ ) {
            answer.push(numbers[i] + numbers[j]);  // 2
        }
    }
    
    return [...new Set(answer)].sort((a, b) => a - b); // 3,4
}

/*
    1. 결과 값인 빈 배열 생성
    2. 두 개 뽑아서 더하기
        자신보다 뒤에 있는 수를 선택하여 더하기만 하면 됨!
    3. set 객체를 통해 중복값 제거
    4. sort메서드 활용하여 정렬하기
*/
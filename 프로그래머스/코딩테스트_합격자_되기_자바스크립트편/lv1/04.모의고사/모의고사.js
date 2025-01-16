function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], 
    ]; // 1
    const scores = [0, 0, 0]; // 2
    
    for(const [i, answer] of answers.entries()) {
        for(const [j, pattern] of patterns.entries()) {
            if(answer === pattern[i % pattern.length]) {
                scores[j] += 1; // 3
            }
        }
    }
    
    const maxScore = Math.max(...scores); // 4
    
    const highestScores = [];
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] === maxScore) {
            highestScores.push(i + 1); //5
        }
    }
    
    return highestScores;
}

/*
    1. 수포자들 패턴 정의
    2. 점수 저장할 배열 선언
    3. answer의 값 순서대로 하나씩 각 패턴 값 순서대로 비교하면서 일치하면 +1하기
    4. 가장 높은 점수 저장
    5. 가장 높은 점수를 갖는 수포자 찾기
*/
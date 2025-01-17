function solution(N, stages) {
    let fail = []; // 1
    let challenger = stages.length; // 2
    
    for(let i = 1; i <= N; i++) {
        const failedChallenger = stages.filter((stage) => stage === i).length; // 3
        fail.push([i, failedChallenger / challenger]); // 4
        challenger -= failedChallenger; // 5
    }
    
    
    const result = fail.sort((a, b) => b[1] - a[1]); // 6
    return result.map((r) => r[0]); // 7
}

/*
    스테이지별 실패율 구하기
    1. 실패율 저장 배열 선언
    2. 스테이지별 챌린지 수
    3. 스테이지별 실패한 사람 수
    4. 스테이지 값과 실패율 같이 저장
    5. 각 스테이지를 참여하는 사람 계산
    6. 내림차순으로 정렬
    7. 스테이지 번호만 추출
*/
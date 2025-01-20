/*
solution1 
- 완전 탐색
- 전체 시간 복잡도: O(n²)
- 정확성: 66.7
- 효율성: 33.3
- 합계: 100.0 / 100.0
*/

function solution1(prices) {
    const answer = [];
    const n = prices.length;
    
    for(let i = 0; i < n; i++) {
        let stack = 0;
        
        for(let j = i + 1; j < n; j++) {
            stack++;
            if(prices[i] > prices[j]) {
                break;
            }
        }
        
        answer.push(stack);
    }
    
    return answer;
}
function solution(arr1, arr2) {
    // 행렬 arr1, arr2의 행과 열의 수    
    const r1 = arr1.length; 
    const c1 = arr1[0].length;
    const r2 = arr2.length;
    const c2 = arr2[0].length;
    
    // 결과 배열의 크기는 r1 * c2
    const result = []; // 저장할 배열 값 초기화 // ex) [[0,...(c2사이즈)], ...(r1만큼)]
    for (let i = 0; i < r1; i++) {
        result.push(new Array(c2).fill(0));
    }
    
    // arr1의 행마다 arr2의 열의 개수만큼 연산을 진행
    for(i = 0; i < r1; i++) {
        for(j = 0; j < c2; j++) {
            for(k = 0; k < c1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return result;
}
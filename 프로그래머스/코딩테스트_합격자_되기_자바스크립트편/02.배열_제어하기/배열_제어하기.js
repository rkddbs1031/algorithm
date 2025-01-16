function solution(arr) {
    const uniqueArr = [...new Set(arr)]; 
    return uniqueArr.sort((a, b) => b - a);
}

/*
   ## 문제 분석
   1. set객체를 활용하여 중복값 제거하기
   2. sort메서드로 내림차순 정렬하기   
*/
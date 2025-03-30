function solution(A) {
    // Implement your solution here
    const positiveNums = A.filter(el => el > 0);
    if(!positiveNums.length) return 1;

    const numSet = new Set(positiveNums);

    for(let i = 1; i <= positiveNums.length; i++) {
        if(!numSet.has(i)) return i;
    }
    return Math.max(...numSet) + 1;
}

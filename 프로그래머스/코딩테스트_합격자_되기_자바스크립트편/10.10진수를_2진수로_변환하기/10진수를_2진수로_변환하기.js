function solution (demical) {
    const stack = [];

    while(demical > 0) {
        const remainder = demical % 2;
        stack.push(remainder);
        demical = Math.floor(demical / 2);        
    }

    let answer = '';   
    while(stack.length > 0) {
        answer += stack.pop();
    }

    return answer;
}
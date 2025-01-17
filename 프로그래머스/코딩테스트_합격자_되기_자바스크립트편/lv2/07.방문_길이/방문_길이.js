// -5 <= x <= 5   -5 <= y <= 5 안에 있는 좌표인지 체크하기 위한 함수
function isValidation(updatedX, updatedY) {
    return updatedX >= -5 && updatedX <= 5 && updatedY >=-5 && updatedY <=5
}


// 다음 좌표 체크하기 위해 좌표 계산 함수
function updateLocation(x, y , dir) {
    switch (dir) {
        case 'U' :
            return [x, y + 1];
        case 'D' :
            return [x, y - 1];
        case 'L' :
            return [x - 1, y];
        case 'R' :
            return [x + 1, y];
    };
}

function solution(dirs) {
    // 1
    let x = 0;
    let y = 0;
    
    let visited = new Set(); // 2
    
    for (dir of dirs) {
        const [updatedX, updatedY] = updateLocation(x, y, dir); // 3
        
        if(!isValidation(updatedX, updatedY)) {
            continue; // 4
        }
        
        // 5
        visited.add(`${x}${y}${updatedX}${updatedY}`);
        visited.add(`${updatedX}${updatedY}${x}${y}`);
        
        
        [x, y] = [updatedX, updatedY]; // 6
    }

    return  visited.size / 2; // 7
}

/*
    중요! 
    1. 중복 경로는 포함하지 않을 것. => set 객체 활용해보기!!!
    2. 좌표에서 벗어나면 그대로 멈춰있다가 좌표가 포함되게 있으면 그 지점부터 시작할 것.
    
    문제 풀이
    1. x,y 좌표 (0, 0)으로 초기화
    2. 중복 경로 체크를 위해 set 객체 활용하기.
    3. 좌표를 통해 다음 좌표 체크
    4. 좌표 안에 있다면 넘어가고 아니라면 좌표 업데이트 하지 않기
    5. 중요!! 
        객체는 참조 타입이기때문에 비교할 때 메모리 주소를 띠짐. 그러므로 해당 문자열로 기록.
        반대도 저장하는 이유는
        좌표 (0,0)에서 (1,0)으로 이동한 경로 저장하였다고 가정하면 "0010"이 저장됨.
        하지만 반대로 (1, 0)에서 (0, 0)으로 이동한 경로는 "1000"으로 저장됨
        같은 경로를 왔음에도 문자열이 다르기 때문에 중복체크가 안될 수도 있기 때문에 두가지 모두 저장되게 해야함!
    6. 좌표 업데이트
    7. size는 JavaScript의 Set 객체에서 저장된 고유 값의 개수를 반환하는 프로퍼티. 
        A -> B와 B -> A인 경우 모두 저장했었으므로 최종길이에서 2를 나눈 값이 최종 길이.
*/
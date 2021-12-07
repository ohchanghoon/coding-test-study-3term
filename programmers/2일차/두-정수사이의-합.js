function solution(a, b) {
    const maxAB = Math.max(a,b);
    const minAB = Math.min(a,b);
    let sum = 0; 
    for (let i = minAB; i<=maxAB; i++) {
        sum += i;
    }
    return sum;
}

/*
Math. 함수를 활용하여 푸는 문제
*/
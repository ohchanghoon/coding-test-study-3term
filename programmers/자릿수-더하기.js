function solution(n) {
    let result = 0;
    
    for (let i of String(n)) result += Number(i);
    
    return result;
};
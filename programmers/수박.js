function solution(n) {
    let result = '';
    
    for (let i = 1; i <= n; i++) i % 2 ? result += '수' : result += '박';
    
    return result;
};
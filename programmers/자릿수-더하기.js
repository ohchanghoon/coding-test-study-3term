function solution(n) {
    const arr = String(n).split('');
    
    return arr.map(num => Number(num))
              .reduce((acc, cur) => acc + cur);
};
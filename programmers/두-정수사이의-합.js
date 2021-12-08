function solution(a, b) {
    let MAX = Math.max(a, b);
    let min = Math.min(a, b);
    let sum = 0;
    for(let i = min ; i <= MAX ; i+=1) {
        sum += i;
    }
    return sum;
}
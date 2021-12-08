function solution(N) {
    const stringofN = String(N);
    let sum = 0;
    
    for (let number of stringofN.split("")) {
        sum += parseInt(number);
    }
    return sum;
}
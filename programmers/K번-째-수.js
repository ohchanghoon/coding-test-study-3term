// 무조건 다시 개념 이해하기.
// 최대한 빨리 까먹고 다시 풀자.
function solution(array, commands) {
    const result = [];
    for(let x = 0; x < commands.length; x += 1) {
        let i = commands[x][0];
        let j = commands[x][1];
        let k = commands[x][2];
        
        const extRactArr = array.slice(i - 1, j)
        const sortedArr = extRactArr.sort((a, b) => a < b ? -1 : 0);
        result.push(sortedArr[k - 1])
    }
    return result
}
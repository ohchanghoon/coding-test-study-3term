function solution(n)
{
    let count = 0
    const numArr = n.toString().split("");
    for (let i = 0; i < numArr.length; i += 1) {
        count += Number(numArr[i]);
    }
    return count;
}
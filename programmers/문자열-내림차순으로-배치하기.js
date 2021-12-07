//더 좋은 풀이*****
// function solution(s) {
//     return s
//         .split("")
//         .sort((a, b) => a > b ? -1 : 0)
//         .join("");
// }
//원래 했던 풀이*****
function solution(s) {
    let arr = s.split("");
    arr.sort((a, b) => a > b ? -1 : 0);
    return arr.join("");
}
function solution(n) {
    let answer = "";
    const textArr = ["수", "박"];
    for (let i = 0; i < n; i++) {
        answer = answer.concat(textArr[i % 2]);
    }

    return answer;
}

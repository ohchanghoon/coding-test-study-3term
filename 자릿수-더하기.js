function solution(n) {
    const text_n = String(n).split("");
    const number_n = text_n.map((item) => Number(item));
    let answer = 0;
    number_n.forEach((item) => {
        answer += item;
    });
    return answer;
}

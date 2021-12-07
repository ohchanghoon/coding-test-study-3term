function solution(text1) {
    var answer = "";
    text1.forEach((item, index) => {
        item === "Kim" ? (answer = `김서방은 ${index}에 있다`) : answer;
    });

    return answer;
}

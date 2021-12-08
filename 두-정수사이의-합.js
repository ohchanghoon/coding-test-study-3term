function solution(a, b) {
    let answer = 0;
    if (a - b >= 0) {
        for (var i = b; i <= a; i++) {
            answer += i;
        }
    } else {
        for (var j = a; j <= b; j++) {
            answer += j;
        }
    }

    return answer;
}

function solution(s) {
    const checkOdd = s.length % 2;
    const avg = s.length / 2;
    const answer = checkOdd ? s[parseInt(avg)] : s[avg - 1] + s[avg];

    return answer;
}

function solution(s) {
    var answer = false;
    let counts = {
        p: 0,
        y: 0,
    };
    for (var i = 0; i <= s.length; i++) {
        s[i] === "P" || s[i] === "p" ? (counts["p"] += 1) : counts;
        s[i] === "Y" || s[i] === "y" ? (counts["y"] += 1) : counts;
    }
    counts["p"] === counts["y"] ? (answer = true) : (answer = false);

    return answer;
}

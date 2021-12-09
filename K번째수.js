function solution(array, commands) {
    let answer = [];
    for (let count1 = 0; count1 < commands.length; count1++) {
        const i = commands[count1][0] - 1;
        const j = commands[count1][1] - 1;
        const k = commands[count1][2] - 1;

        let newArray = [];
        for (let count2 = i; count2 < j + 1; count2++) {
            newArray.push(array[count2]);
        }
        newArray.sort((a, b) => a - b);
        answer.push(newArray[k]);
    }
    return answer;
}

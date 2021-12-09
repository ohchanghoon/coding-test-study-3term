function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    answer = answer.filter((item, index) => answer.indexOf(item) === index);
    answer.sort((a, b) => {
        if (a > b) return 1;
        else return -1;
    });
    return answer;
}

function solution(array, commands) {
  let answer = [];
  let sliceSortArr = [];
  for (let i = 0; i < commands.length; i++) {
    sliceSortArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => {
        return a - b;
      });
    answer.push(sliceSortArr[commands[i][2] - 1]);
  }
  return answer;
}

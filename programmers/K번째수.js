function solution(array, commands) {
  const answer = [];
  let sliceSortArr = [];

  for (let i in commands) {
    sliceSortArr = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b);
    answer.push(sliceSortArr[commands[i][2] - 1]);
  }
  return answer;
}

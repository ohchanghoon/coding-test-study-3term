function solution(array, commands) {
  const answer = [];

  for (let i in commands) {
    const list = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => {
        return a - b;
      });
    answer.push(list[commands[i][2] - 1]);
  }

  return answer;
}

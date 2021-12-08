function solution(n) {
  const stringN = String(n);
  let answer = 0;

  for (let i in stringN) {
    answer += Number(stringN[i]);
  }
  return answer;
}

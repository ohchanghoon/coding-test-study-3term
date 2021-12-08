function solution(n) {
  const stringN = String(n);
  let answer = 0;
  for (let i = 0; i < stringN.length; i++) {
    answer += Number(stringN[i]);
  }
  return answer;
}

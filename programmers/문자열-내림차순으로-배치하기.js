function solution(s) {
  let answer = "";
  const stringArr = s.split("").sort().reverse();
  answer = stringArr.join("");
  return answer;
}

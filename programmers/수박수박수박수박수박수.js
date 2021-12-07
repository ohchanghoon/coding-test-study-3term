function solution(n) {
  let answer = "";
  let plusW = "";
  for (let i = 0; i < n; i++) {
    plusW = i % 2 == 0 ? "수" : "박";
    answer += plusW;
  }
  return answer;
}

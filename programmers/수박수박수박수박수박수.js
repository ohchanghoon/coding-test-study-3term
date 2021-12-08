function solution(n) {
  let answer = "";
  let addWord = "";
  for (let i = 0; i < n; i++) {
    addWord = i % 2 === 0 ? "수" : "박";
    answer += addWord;
  }
  return answer;
}

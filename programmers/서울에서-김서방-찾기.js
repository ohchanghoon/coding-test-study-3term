function solution(seoul) {
  var answer = "";
  for (let i in seoul) {
    if (seoul[i] == "Kim") {
      answer = `김서방은 ${seoul.indexOf(seoul[i])}에 있다`;
    }
  }
  return answer;
}

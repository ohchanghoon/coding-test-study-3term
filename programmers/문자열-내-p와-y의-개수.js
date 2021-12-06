function solution(s) {
  var answer = true;
  let countP = 0;
  let countY = 0;

  for (let i in s) {
    if (s[i] == "p" || s[i] == "P") {
      countP += 1;
    } else if (s[i] == "y" || s[i] == "Y") {
      countY += 1;
    }
  }

  answer = countP == countY ? true : false;

  return answer;
}

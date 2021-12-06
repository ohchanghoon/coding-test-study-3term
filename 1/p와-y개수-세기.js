// p와 y개수 세기

function solution(s) {
  let answer = true;
  let pNum = 0; // p 개수 저장 변수
  let yNum = 0; // y 개수 저장 변수
  for (let i of s) {
    // s 문자열 단어 하나씩 반복
    if (i === "p" || i === "P") {
      // p 또는 P면
      pNum += 1; // p 개수 1 증가
    } else if (i === "y" || i === "Y") {
      // y 또는 Y면
      yNum += 1; // y 개수 1 증가
    }
  }
  if (pNum === yNum) answer = true;
  // p개수와 y개수가 같으면 answer에 true 저장
  else answer = false; // 아니면 false 저장

  return answer;
}

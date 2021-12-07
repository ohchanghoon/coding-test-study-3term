function solution(s) {
  let answer = "";
  let arr = [];
  let strArr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt([i])); // 아스키코드로 바꿔서 배열arr에 저장
  }
  arr.sort(function (a, b) {
    return b - a;
  }); // arr에 원소들 내림차순으로 정렬
  arr.forEach((num) => {
    strArr.push(String.fromCharCode([num]));
  }); // 아스키 코드를 다시 문자로 바꿔서 배열strArr에 저장
  strArr.forEach((str) => {
    answer += str; // 배열에 있는 문자들을 꺼내서 문자열로 만들기
  });

  return answer;
}

// 서울에서 김서방 찾기

function solution(seoul) {
  for (let i in seoul) {
    // seoul 배열 값의 길이만큼 반복합니다.
    if (seoul[i] === "Kim") return `김서방은 ${i}에 있다`; // kim과 일치하면 answer에 김서방 위치를 반환합니다.
  }
}

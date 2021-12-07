function solution(s) {
    return s.split('').sort().reverse().join('');
}
// 문자열을 내려받은후 split으로 배열로 만들어준후 sort로 오름차순으로 정렬시키고 
// 내림차순으로 만들기위해 reverse를 사용한뒤 다시 문자열로 만들기위해 join을 사용했습니다.

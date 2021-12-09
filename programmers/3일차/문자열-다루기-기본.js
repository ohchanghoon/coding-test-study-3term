function solution(s) {
    const result = parseInt(s);

    if ( (s.length == 4 || s.length == 6) && s == result) {
        return true
    }
    return false
}
/*
parseInt메소드를 이용하여 문자열 s를 숫자로 구성되어있는지 한번에 비교하는 문제
*/
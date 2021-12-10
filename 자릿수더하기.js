function solution(n){
    if (n > 100000000 ){
        return n;
    }
    let trans = (n + '').split('');
    console.log(n)
    if (n == 0){
        return parseInt(n);
    }
    if (n.length == 1){
        return n;
    }
    
    return trans.reduce((acc, cur) => {
         return parseInt(acc) + parseInt(cur)
    },0);
}
// 21번 케이스가 계속 오류가나 구글링을했더니 reduce 함수는 빈배열일때 오류가 난다고 합니다.
// 같은형식으로 첫값을 0으로 지정해줬더니 통과되었습니다.
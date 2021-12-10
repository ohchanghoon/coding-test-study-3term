function solution(a, b) {
    let sum = 0;
    let i = 0;
    if (a<b){
        for (i=a; i<b+1; i++){
        sum += i
    }
    return sum;
    }
    else{
        if(a==b){
            return a
        }
        else{
            for (i=b; i<a+1; i++){
            sum += i            
        }
    }
    return sum;
    }
    
}
// 코딩이 좀 길어지는것 같아 메서드를 써보려다가 조건을 걸면서 비슷한길이가 되어 
// for 문을 사용하여 코딩을 종료했습니다.
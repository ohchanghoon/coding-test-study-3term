function solution(a, b) {
    const num = [];
    
    let answer = 0;

    //a와 b가 같을 경우 a 반환, b 반환해도 됨
    if (a === b){
        answer = a;
    }
    //a와 b가 다를 경우 num 배열 넣기
    //배열값을 오른차순으로 정렬 하여 작은 수 부터 입력을 받는다.  
    else {
        num.push(a, b); //a와 b의 배열 추가
        num.sort((a, b) => a - b); //내림차순
 for (let i = num[0]; i <= num[1]; i++) {
            answer += i;
        }
        
    }

        return answer;
    }

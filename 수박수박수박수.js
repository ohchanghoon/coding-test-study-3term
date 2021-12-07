// 길이가 n 
//문자열을 리턴하는 함수
//n이 4면 수박수박 3이면 수박수
function solution(n) {
    //let 과 var의 차이점 (let은 중복 선언이 불가능 하고 var은 중복 선언이 가능하다. )
    //결과값은 한번만 사용해도 괜찮으니까 let을 사용 한다. 
        let answer = ""
        
    //for 문을 이용해서 문제 풀이 하는 방법
        for (let i = 1; i<=n; i++ ) {// 선언과 동시에 값을 초기화 해준다.  
            
            if (i % 2 ===0){//==은 값만 같으면 true, ===값과 값의 종류가 모두 같아야 true  
                answer +="박"
            }
            else{
                answer +="수"
            }
        }
    //값이 같으면 짝수면 박, 홀수면 수
            return answer
    }
        
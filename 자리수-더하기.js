function solution(n)
{
    let answer = 0;
    let isString = String(n);
    
    for (let i = 0; i < isString.length; i++){
        answer += parseInt(isString[i]);
    }

    

    return answer;
}


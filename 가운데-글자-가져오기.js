function solution(s) {
    //문자열 길이 length
    //짝수면 가운데 글짜 두개 , 홀수면 가운대 글자 1개
    
    if (s.length % 2 ==0) {  //길이가 짝수면 
        answer = s[s.length / 2 - 1]+ s[s.length / 2]; //가운데 글자 두개 
    //예) 문자열의 길이가 8이라면 4-1과 4를 출력하라는 뜻이다. 

    }
    else {
        answer = s[s.length / 2 -0.5]; // 5라는 숫자가 있으면 나누면 2.5  
    }
    
      return answer;
    }
    
    
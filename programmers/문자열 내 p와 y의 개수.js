'use strict'
//문자열 내 p와 y의 개수
function solution(s){
    if (s.toUpperCase().split('P').length ===s.toUpperCase().split('Y').length){
    return(true);
    
    }else{
    
    return(false);
    }
        }
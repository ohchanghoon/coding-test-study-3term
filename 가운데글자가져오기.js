function solution(s) {
    const ss = s.split('');
    const sss = s.length;
    const ssss = sss-(sss/2);
    if (sss%2 !== 0){
        return s.charAt(ssss);
    }
    else{
        return s.substring((sss-ssss)-1, sss-ssss+1);
     }
}
// 아까 알려주신 index가 무슨소리인지 모르겠어서 일단 이렇게 짰습니다.
// 한글자만 return할때는 charAt를 사용했고 두글자 이상을 return할때는 substring을 사용해봤습니다.
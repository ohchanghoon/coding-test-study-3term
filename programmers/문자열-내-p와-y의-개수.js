function solution(S){
    let count_p = 0;
    let count_y = 0;
    var s = S.toLowerCase();
    for(let i =0; i < s.length; i++){
        if(s[i] === 'p'){
            count_p++;
        }else if(s[i] === 'y'){
            count_y++;
        }
    }
    console.log(count_p);
    console.log(count_y);
    if(count_p !== count_y){
        return false;
    }else{
        return true;
    }
}
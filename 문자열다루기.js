function solution(s) {
    let test = s.replace(/[^0-9]/g,'');
    const subs = s.replace(" ","")
    if (test.length !== subs.length){
        return false;
    }
    if (4 == subs.length || 6 == subs.length){
        return isFinite(subs);
    }

    else{
        return false;
    }
    
}
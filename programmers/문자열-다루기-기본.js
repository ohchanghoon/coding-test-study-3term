function solution(s) {
    
    let str = s.toUpperCase();
    if (str === s) {
        if (str.toLowerCase() === s) {
            if (str.length === 4 || str.length === 6) {
                return true;
            }
            return false;
        }
        return false;
    } else {
     return false;   
    }
}
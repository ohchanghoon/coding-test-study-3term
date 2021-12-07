function solution(s) {
    const slen = s.length;
    const len = slen / 2;
    
    return slen % 2 ? s.slice(len, len + 1) : s.slice(len - 1, len + 1);
};
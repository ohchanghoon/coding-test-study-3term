function solution(s){
    const word = s.split("");
    const array = word.map(word => word.toLowerCase());
    let p = 0;
    let y = 0;
    
    for (let el of array) {
        if (el === 'p') {
            p += 1;
        } else if (el === 'y') {
            y += 1;
        };
    };

    return p === y ? true : false;
};

console.log(solution("pPoooyY"));
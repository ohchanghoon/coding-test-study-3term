function solution(array, commands) {
    let i = 0;
    let arr = 0;
    let rarr = 0;
    let answer = [];
    const comlen = commands.length
    if (comlen < 51){
        for (let i = 0 ; i < comlen ; i++ ){
            let arr = array.slice(commands[i][j]-1,commands[i][j+1]);
            arr.sort(function(a, b)  {
                return a - b;
            });
            let rarr = arr[commands[i][2]-1]
            answer.push(rarr);
            console.log(answer);
        }
        
    }
    
    return answer;
}
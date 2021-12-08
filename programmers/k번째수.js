function solution(array, commands) {
    const result = [];
    
    for (let i = 0; i < commands.length; i++) {
       const arr = array.slice(commands[i][0] - 1, commands[i][1])
                        .sort((a, b) => a - b);
       result.push(arr[commands[i][2] - 1]);
    };
    
    return result;
};
function solution(array, commands){
    
    const result = [];

    for ( let eachCommand of commands ) {
        let arrayEachCommand = [];
        for (let i = eachCommand[0]; i<=eachCommand[1]; i++) {
            arrayEachCommand.push(array[i-1]);
            arrayEachCommand.sort((a, b) => a - b);
            // console.log(arrayEachCommand)
            
       }
        result.push(arrayEachCommand[eachCommand[2]-1])
    }
    return result
    
}
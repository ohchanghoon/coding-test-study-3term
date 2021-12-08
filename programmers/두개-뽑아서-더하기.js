function solution(numbers) {
    let newArr = [];
    for (let i = 0; i < numbers.length + 1; i += 1 ) {
        for (let j = i + 1; j < numbers.length; j += 1) {
            newArr.push(numbers[i] + numbers[j])
        }
    }
    let arrdpRmvd = new Set(newArr);
    console.log([...arrdpRmvd]);
    return [...arrdpRmvd].sort((a, b) => a < b ? -1 : 0);
}
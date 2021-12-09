function solution (numbers) {
    let arrAllNumber = [];
    let count = 1;

    for ( let i = 0; i<numbers.length; i++ ) {
        for ( let j = count; j<numbers.length; j++) {
            const numberSum = numbers[i]+numbers[j];

            if ( arrAllNumber.indexOf(numberSum) < 0 ) {
                //indexof(numbersum) 은 arrAllNumber에서 numberSum을 찾고 numberSum 이없으면 -1을 리턴해줌 
                arrAllNumber.push(numberSum)
            }
        }
        count += 1;
    }
    return arrAllNumber.sort((a, b) => a - b);

}

console.log(solution([2,1,3,4,1]))
/*중간에 이중 for 문에 count 를 넣어주어 바깥for문이 끝날 때 마다 count 를 1씩 증가시켜 
numbers에 있는 모든 요소들이 자신을 제외한 요소들끼리 한번씩 더해 질수 있게 조건을 넣어주는 부분이 첫번째 key이고,
두번째 key는 indexof함수를 이용하여 numbers에 있는 중복되는 요소를 어떻게 처리해 주는지가 두번째 key다.
*/
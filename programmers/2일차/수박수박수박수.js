function solution (n) {
    const word  = "수박";
    const split_word = word.split("");
    const answer =[];
    let count = 0;
    while(n>count) {
        for (let i of split_word) {
            answer.push(i);
            count += 1;
            if ( count>= n) {
                break;
            }
        } 
    }
    const join_answer = answer.join("");
    return join_answer ;
}
/*
수박이라는 단어를 split함수를 이용해 글자별로 잘라 배열에 담고 
while문을 이용해 수박의 반복수를 정해줄 count가 n보다 작을 동안
수박을 글자로 잘라준 split_word 를 for of 문을 사용하여 반복시켜주고 
for문 안에 if조건을 주어 n이 홀수로 주어졌을때 탈출 조건을 만들어 주었습니다.   
*/
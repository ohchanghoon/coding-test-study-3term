function solution(s) {
    let answer = "";
    let splitS = s.split("");
    if (splitS.length % 2 !== 0 ) {
            answer = splitS[parseInt(splitS.length / 2)];
            console.log(answer);
    }
    else {
        answer = splitS[parseInt(splitS.length / 2)-1]+splitS[parseInt(splitS.length / 2)];
    }
    return answer;
}

/*
s를 받아 단어를 잘라 배열에 넣어주고, 만들어준 배열의 길이와 배열의 인덱스를 이용하여 푸는 문제.
*/
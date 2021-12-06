function solution(seoul){
//solution 이란 함수를 선언하였고 seoul란 변수를 함수 안에 넣어주었다.
    for(let i=0; i<seoul.length; i++){
//for 문을 사용하여 변수 i가 seoul이란 배열을 탐색할 수 있게 만들어 주었다.
        if(seoul[i] === "Kim"){
//Kim이 배열내에 오직 한번만 나타나므로 seoul[i] == Kim 조건을 주어 Kim을 찾았다.
            return "김서방은 "+i+"에 있다"
        }
//if문을 이용하여 Kim이 seoul배열안에 들어있으면 김서방의 위치를 return 하도록 만들어 주었다.
    }
}


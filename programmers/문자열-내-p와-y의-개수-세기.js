function solution(s){
    var count_p = 0;
//s내부의 p의 개수를 세줄 변수를 선언하였습니다.    
    var search_p = 'p';
// indexof라는 함수를 이용하여 p를 찾기 위하여 search_p라는 문자 p를 담고있는 변수를 선언하였습니다. 
    var index_p = s.indexOf(search_p);
// indexof라는 함수를 사용하여 s내부의 p의 위치를 입력받는 index_p를 선언하였습니다.
    while(index_p !== -1){
        count_p ++;
        index_p = s.indexOf(search_p,index_p+1);
    }
/*index_p가 문자열 s의 마지막인덱스 까지도는 동안나오는 p의 개수를 count_p에 누적시키고,
 indexof함수는 searchvalue가 없게 되면 -1을 리턴하므로 while문을 빠져나와 줍니다.*/
    var count_y = 0;
    var search_y = 'y';
    var index_y = s.indexOf(search_y);
    while(index_y !== -1){
        count_y ++;
        index_y = s.indexOf(search_y,index_y+1);
    }
 //문자 s에 대해서도 같은 방식으로 진행   
    if(count_p === count_y){
        return true;
    }
    else{
        return false;
    }
}
//s와 p의 개수를 비교해주고 같으면 true 다르면 false를 리턴해 줍니다.

/*자바스크립트 문법을 잘 몰라 구글링을 사용하여 indexof 함수의 예제를 보면서 문제를 해결하였습니다.
많이 부족한 실력이지만 뒤쳐지지 않게 열심히 하겠습니다.
*/

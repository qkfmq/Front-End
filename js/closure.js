//평균 구하기
/*double solution(int arr[], size_t arr_len) {
    double sum = 0;
    for (size_t i = 0; i < arr_len; i++) {
        sum += arr[i];
    }
    return sum / arr_len;
}*/

function makeCountter(initVal){
    var count = initVal;
    function Increase(){
        count ++;
        console.log(count);
    }
    return Increase;  //새로운 클로저
}

var counter1 = makeCountter(0);  //둘다 count 라는 이름 쓰지만 다른 값을가진다.
var counter2 = makeCountter(10);

counter1();
counter2();

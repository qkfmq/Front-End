console.log("Menu");
console.log("1.Ice Americano");
console.log("2.cafe Latte");

var count = 0;
while(count <2){
    var choice = parseInt(prompt("메뉴를 선택해 주세요"));

    console.log(choice +"번 메뉴를 선택했습니다.");
    switch(choice){
        case 1:
            console.log("아이스 아메리카노 1500원");
            break;
        case 2:
            console.log("카페 라떼는 1700원");
            break;
        default:
            console.log("죄송합니다. 그런 메뉴는 없습니다.");
            break;
        }
        count ++;
}


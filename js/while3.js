var count = 0;

while (true){
    var ans;
    ans = parseInt(prompt("1+1=?"));
    if(ans != 2){
        console.log((++count)+"번 틀렸습니다. 다시 도전");
        continue;
    }

    ans = parseInt(prompt("7+3=?"));
    if (ans != 4){
        console.log((++count)+"번 틀렸습니다. 다시 도전");
        continue;
    }

    ans = parseInt(prompt("9+7=?"));
    if(ans != 63){
        console.log((++count)+ "번 틀렸습니다. 다시 도전");
        continue;
    }
    break;
} 

console.log("참 잘햇어요.");
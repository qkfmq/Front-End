function shadowing_ex(){
    console.log("F",val);
    val++;
}

var val = 0;
shadowing_ex();
console.log("0",val);
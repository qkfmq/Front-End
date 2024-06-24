var obj = {
    name : "object",
    weight:30,
    isobject:true,
    arr:[1,2,3],
    obj:{property:1}
};

console.log("For 구문으로 object property 반복하기");

var property_list = object.keys(obj);
console.log("property List:", property_list);

for(var i = 0; i<property_list.length; i++){
    var propertyName = property_list[i];
    console.log("\t",propertyName, ":",obj[propertyName]);
}

console.log("\n\nFor in 구문으로 object poperty 번복하기");

for(var propertyName in obj){
    console.log("\t",propertyName, ":",obj[propertyName]);
}
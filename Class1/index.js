let arr = [1,2,3,4];

arr.forEach(function(val){
    console.log(val + " Hello");
})

let newarr = arr.map(function(val){
    return val *3;
})
console.log(newarr);

let newarr2 = arr.filter(function(val){
    if(val > 2) {
        return val;
    }
})
console.log(newarr2);

let data = arr.find(function(val){
    if(val === 2){
        return true;
    }
})
console.log(data);

console.log(arr.indexOf(2));
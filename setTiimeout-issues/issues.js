//issues with setTimeout
console.log("Start");

setTimeout(function(){
    console.log("setTimeout")
},1000);

console.log("End");

let startDate=new Date().getTime();
let endDate=startDate;
while(endDate<startDate+10000){
    endDate=new Date().getTime();
}
console.log("Loop expired");

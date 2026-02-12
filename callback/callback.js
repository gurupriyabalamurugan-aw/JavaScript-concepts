// setTimeout(function(){
//     console.log("Hello")
// },1000)
// function x(y){
//     console.log("Hello from x");
//     y()
// }
// x(function y(){
//     console.log("Hello from y")
// })

//closure with event listener
function newFunction(){
    let count=0;
document.getElementById("clickMe").addEventListener("click",function xyz(){//callback
    console.log("Button clicked",++count);
})
}
document.addEventListener("DOMContentLoaded", newFunction);

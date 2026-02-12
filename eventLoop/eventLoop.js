console.log("Start");

setTimeout(function cb(){
    console.log("CAllback");
},5000);

fetch("https://aistudio.google.com/api-keys")
.then(function callfetch(){
    console.log("Fetch is done")
})
// //dom api
// document.getElementById("clickMe").addEventListener("click",function cb(){
//     console.log("Callback executed");
// });
console.log("End");

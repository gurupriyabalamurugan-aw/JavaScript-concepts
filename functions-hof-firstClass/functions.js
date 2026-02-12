function sayHello(){
  console.log("Hello!");//fucntion statement
}
function myfunction(fn){ //function as param
  return fn;  //returning a function
}

const stored=myfunction(sayHello); //ffunction in variable
stored(); 

//higher order functions
radius=[1,2,3,4,5];

// function calculateArea(radius){
//     let area=[];
//     for(let i=0;i<radius.length;i++){
//         area.push(Math.PI*radius[i]*radius[i])
//     }
//     return area;
// }
// console.log(calculateArea(radius))

//to find circumference,diameter too

const area=function(radius){
    return Math.PI*radius*radius;
}
const circumference=function(radius){
    return 2*Math.PI*radius;
}
const diameter=function(radius){
    return 2*radius;
}

function calculate(radius,logic){
    let result=[];
    for(let i=0;i<radius.length;i++){
        result.push(logic(radius[i]))
    }
    return result;
}
console.log( calculate(radius,area))
console.log(calculate(radius,circumference))
console.log(calculate(radius,diameter)) 

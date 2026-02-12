const arr=[2,4,5,6,7]
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}

// function map(arr,logic){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         result.push(logic(arr[i]))
//     }
//     return result;
// }
// console.log(map(arr,double))

const output=arr.map(double);
console.log(output)

//binary conversion
const op1=arr.map((x)=> {
    return x.toString(2);
})
console.log(op1)

const users=[
    {firstName:"Priya",lastName:"Balamurugan", age:22},
    {firstName:"Sanjith",lastName:"Sharan", age:25}
]
const fullname=users.map((x)=> {
    return x.firstName+" "+x.lastName;
})
console.log(fullname)

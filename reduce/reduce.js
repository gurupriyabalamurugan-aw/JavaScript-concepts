const arr=[2,4,5,6,7];
//normal sum
function findSum(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr))

//using reduce
function findSum(arr){
    return arr.reduce((acc,curr)=>{
        return acc+curr;
    },0)
}
console.log(findSum(arr))

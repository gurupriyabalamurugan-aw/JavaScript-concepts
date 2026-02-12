//valid

var a =200;
{
    var a=900;//let
    console.log(a);
}
console.log(a)

let b=100;
{
    let b=99;
    console.log(b)
}
console.log(b)

// //Illegal shadowing
// let b=90;
// {
//     var b=20;
// }
// console.log(b)



var a=200;
{
    var a=10;
    let b=5;
    const c=2;
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log(a)

function test() {
  for (let i = 1; i <= 3; i++) {//var instead gives 4,4,4
    setTimeout(() => console.log(i), 1000);
  }
}
test();

//with closure for var
for (var i = 1; i <= 3; i++) {
  (function(t) {
    setTimeout(() => console.log(t), 1000);//1,2,3 
  })(i);
}

function a(){
    var b=10;
    c();
    function c(){  //c is lexical to a
        console.log(b);   //scope chain
}
}
a();



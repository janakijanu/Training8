var x=10;

function f1(){
    var x=20;
    var x=30;
    console.log(x);
}
console.log(x);
f1();
function f3(){
    var x=60;
    console.log(x);
    function f2(){
        var x=40;
        console.log(x);
    }
    f2();
}
f3();
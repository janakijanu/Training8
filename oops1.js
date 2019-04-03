function f1(){
    console.log("Printed");
}

var f2=function(){
    console.log("Print That")
}

var f3=()=>{console.log("Yes Printed")}

f1();
f2();
f3();

var f4=new Function("a","b","console.log(a); console.log(b); return a+b");
console.log(f4(10,20));

var myname="janu";
var myage=30;

var txt=`My Name is ${myname} and my Age is ${myage}`;

console.log(txt);

emp={
    "name":"janu",
    "salary":30000,
    "printAllowance":function(){
        var all=this.salary*0.45;
        console.log(`This salary of ${this.name} is ${this.salary}`);
        var allTxt=`This Allowance for ${this.name} is ${all}`;
        console.log(allTxt)
    }
}
emp.printAllowance();
'use strict'

var s1="abcd";

var s2=new String("xyz");

console.log(s1.constructor);
console.log(s2.constructor);

var a1=[1,2,3];
var a2=new Array();

console.log(a1.constructor);
console.log(a2.constructor);


var obj={};
console.log(obj.constructor);

function Student(){

}

var stud1=new Student();
console.log(stud1.constructor)

console.log(typeof stud1)

stud1.constructor.prototype.roll=100;

//console.log(stud1.constructor)

var stud2=new Student();

console.log(stud1.roll);
console.log(stud2.roll);

s1.constructor.prototype.printData=function(){
    console.log("My Function in String Objects");
}

s1.constructor.prototype.toUpperCase=function(){
    
}

s1.printData();
s2.printData();

delete s1.constructor.prototype.toUpperCase;

s1.printData();
s2.printData();

console.log(s1.toUpperCase());
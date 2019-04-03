var obj=new Object();

obj.rollNumber=5001;
obj.name='janu';

Object.prototype.showDetails=function(){
    console.log(`Name  is ${this.name}`)
}

var emp=new Object();
emp.name="janaki";
emp.showDetails();

obj.showDetails();

for(i in obj){
    console.log("Property Name :"+i+" value : "+obj[i]);
}
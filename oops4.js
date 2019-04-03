var obj1={};
var obj2={};

function Emp(){

}

var emp1=new Emp();
var emp2=new Emp();


emp1.id=101;

console.log("salary" in emp1);
console.log("getAllowance" in emp1);

Emp.prototype.salary=10000;
Emp.prototype.getAllowance=function(){
    return this.salary*0.45;
}

console.log("salary" in emp1);
console.log("getAllowance" in emp1);

console.log("salary" in emp2);
console.log("getAllowance" in emp2);

console.log(emp1.salary);
console.log(emp1.getAllowance());

console.log(emp2.salary);
console.log(emp2.getAllowance());

//emp1.salary=50000;

console.log(emp1.salary);
console.log(emp1.getAllowance());

console.log(emp2.salary);
console.log(emp2.getAllowance());

Emp.prototype.salary=50000;

console.log(emp1.salary);
console.log(emp1.getAllowance());

console.log(emp2.salary);
console.log(emp2.getAllowance());

delete Emp.prototype.salary;
delete Emp.prototype.getAllowance;

console.log("salary" in emp1);
console.log("getAllowance" in emp1);

console.log("salary" in emp2);
console.log("getAllowance" in emp2);

console.log("--"+emp1.hasOwnProperty("id"));
console.log("--"+emp1.hasOwnProperty("salary"));
console.log("--"+emp1.hasOwnProperty("getAllowance"));

console.log("+++" +("toString" in emp1));
console.log(emp1.hasOwnProperty("toString"));
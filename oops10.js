function Employee(a,b,c){
    this.id=a;
    this.name=b;
    this.salary=c;
}

Employee.prototype.getTax=function(){
    return this.salary*10/100.0;
}

Employee.prototype.getAllowance=function(){
    return this.salary*25/100.0
}

Employee.prototype.getNetSalary=function(){
    return this.salary+this.getAllowance()-this.getTax();
}

function Manager(a,b,c,d,e){
    Employee.call(this,a,b,c);
    this.department=d;
    this.empCount=e;
}

Manager.prototype=Employee.prototype;

Manager.prototype.getSpecialAllowance=function(){
    return 500;
}

Manager.prototype.getNetSalary=function(){
    return this.salary+this.getAllowance()-this.getTax()+this.getSpecialAllowance();
}

var e1=new Employee(1,"Janu",10000);
var e2=new Employee(2,"Janaki",10000,"HR",300)

console.log(e1.getAllowance());
console.log(e1.getTax());
console.log(e1.getNetSalary());
console.log(e1.getSpecialAllowance());

console.log(e2.getAllowance());
console.log(e2.getTax());
console.log(e2.getNetSalary());
console.log(e2.getSpecialAllowance());



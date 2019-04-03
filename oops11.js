class Employee{
    constructor(a,b,c){
        this.id=a;
        this.name=b;
        this.salary=c;
    }

    getTax(){
        return this.salary*10/100.00
    }
    getAllowance(){
        return this.salary*25/100.00
    }
    getNetSalary(){
        return this.salary+this.getAllowance()-this.getTax();
    }
}

class Manager extends Employee{
    constructor(a,b,c,d,e){
        super(a,b,c);
        this.dept=d;
        this.deptCount=e;
    }

    getSpecialAllowance(){
        return this.salary;
    }

    getNetSalary(){
        return this.salary+this.getAllowance()-this.getTax()+this.getSpecialAllowance();
    }
}

emp=new Employee(101,"Janu",1000);

console.log(emp.getTax());
console.log(emp.getAllowance());
console.log(emp.getNetSalary());
console.log("------------")

mgr=new Manager(201,"Janaki",1000,"HR",240)

console.log(mgr.getTax());
console.log(mgr.getAllowance());
console.log(mgr.getSpecialAllowance());
console.log(mgr.getNetSalary());
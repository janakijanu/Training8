var emp={
    "id":101,
    "name":"Janu",
    "salary":40000,
    "getTax":function(){
        return this.salary*0.10;
    }
}

var manager={
    
}

for(i in emp){
    manager[i]=emp[i]
}
manager['dept']="HR";
manager['empCount']=300;


console.log(emp);
console.log(manager);
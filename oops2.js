var obj={};

if(!obj.radius){
    obj.radius=10;
}

if(!obj.getArea){
    obj.getArea=function(){
        return this.radius*this.radius*3.14;
    }
}
console.log(obj.radius);
console.log(obj.getArea());

delete obj.radius;

console.log(obj.radius);
console.log(obj.getArea());

console.log("radius" in obj);
console.log("getArea" in obj);

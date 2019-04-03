function Circle(r){
    this.radius=r;

    this.getArea=function(){
        return this.radius*this.radius*3.14
    }
    
    this.toString=function(){
        return `Radius is the circle is ${this.radius}`;
    }
}

var rect={
    "width":10,
    "height":20,
    "getArea":function(){
        return this.width*this.height;
    },
    "toString":function(){
        return `[${this.width} , ${this.height}]`;
    }
}
var c1=new Circle(10);

console.log(rect);
console.log(c1);
console.log(rect.getArea());
console.log(c1.getArea());
console.log(rect.toString());
console.log(c1.toString());
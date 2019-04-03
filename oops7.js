function Point(){
    this.x=100;
    this.y=200;
    this.printData=function(){
        console.log(`[${this.x} - ${this.y} - ${this.z}]`)
    }
}

p=new Point();
p.printData();
console.log(p.toString())

Point.prototype.z=300;
Point.prototype.toString=function(){
    return `Point is ${this.x} ${this.y} ${this.z}.`;
}
console.log(p.toString())

p.printData();

Object.prototype.z=400;
p.printData();
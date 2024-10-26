// Prototypes

function Vehicle(wheels , price){
    this.numWheels = wheels;
    this.price=price;
    this.getprice=function(){
        console.log(this.price);
    }
}

console.log(Vehicle.prototype);// To take to the prototype
console.log(Vehicle.prototype.constructor); // To take back to the function
// Properties of Prototype
// using vehicle1.color will not add up to a property in the prototype but it will add in the object itself
function Vehicle(wheels , price){
    this.numWheels = wheels;
    this.price=price;
}

Vehicle.prototype.getprice = function(){
    console.log(this.price);
}

var vehicle1 = new Vehicle(10,1000);

var vehicle2 = new Vehicle(20,2000);

console.log(Object.getPrototypeOf(vehicle1));

console.log(Vehicle.prototype.isPrototypeOf(vehicle1));

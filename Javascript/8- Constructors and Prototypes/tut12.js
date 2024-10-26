// Classes

class Vehicle{

    constructor(wheels , price) {
        this.wheels = wheels;
        this.price  = price;
    }

    getprice(){
        return this.price;
    }
}

var vehicle1 = new Vehicle(10,1000);

var vehicle2 = new Vehicle(20,2000);

console.log(vehicle1.getprice());
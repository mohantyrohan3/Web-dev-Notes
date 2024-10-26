function Vehicle(wheels , price){
    this.numWheels = wheels;
    this.price=price;
}

Vehicle.prototype.getprice = function(){
    console.log(this.price);
}

var vehicle1 = new Vehicle(10,1000);

var vehicle2 = new Vehicle(20,2000);

vehicle1.getprice();
vehicle2.getprice();
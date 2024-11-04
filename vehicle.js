class Vehicle{
    constructor(make, model, year, mileage, price){
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
    }
    getVehicleInfo() {
        return `${this.make} ${this.model} (${this.year}), ${this.mileage} KM, Cost: $${this.price}`;
    }
    drive(km){
        this.mileage += km;
    }
}

class Car extends Vehicle{
    constructor(make, model, year, mileage, price, fuelType){
        super(make, model, year, mileage, price);
        this.fuelType = fuelType;
    }
    getCarInfo() {
        return `${this.getVehicleInfo()}, Fuel: ${this.fuelType}`;
    }
    applyDiscount(discount){
        this.price *= (1 - discount);
    }
}

class Truck extends Vehicle{
    constructor(make, model, year, mileage, price, cargoCapacity) {
        super(make, model, year, mileage, price);
        this.cargoCapacity = cargoCapacity;
        this.currentCargo = 0;
    }
    getTruckInfo() {
        return `${this.getVehicleInfo()}, Cargo: ${this.currentCargo} kilograms`;
    }
    loadCargo(kg) {
        if (this.currentCargo + kg <= this.cargoCapacity) {
            this.currentCargo += kg;
        } else {
            console.log("Current cargo weighs: ", this.currentCargo, "You cannot fit ", kg, " more cargo");
        }
    }
}

const car = new Car("Toyota", "Subaru", 2015, 10000, 20000, "gasoline");

car.drive(2000);
car.applyDiscount(0.30);
console.log(car.getCarInfo());

const truck = new Truck("Ford", "Ranger", 2019, 80000, 40000, 10000);

truck.drive(10000);
truck.loadCargo(8000);
console.log(truck.getTruckInfo());

truck.loadCargo(3000); 
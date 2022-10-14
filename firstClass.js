/* Car Class */
class Car {
    // Class attributes
    model;
    plateNr;
    maxSpeed;
    currentSpeed;
    fuelCapacity;
    remainingFuel;

    // Class methods

    // Constructor method ( run when an object is created )
    constructor( plateNumber ) {
        this.plateNr = plateNumber;
    }
    // Sets current speed to target speed
    setCurrentSpeed( targetSpeed ) {
        this.currentSpeed = targetSpeed;
    }
    // Returns value of current speed
    checkCurrentSpeed() {
        return this.currentSpeed;
    }
    // Returns platenumber
    getPlateNumber() {
        return this.plateNr;
    }
}

// Create a car object with plate number OOP-001.
let car = new Car("OOP-001");
// Set car's speed to 120 km/h.
car.setCurrentSpeed(120);
// Print out the info about the car (plate number and current speed).
process.stdout.write("\nCurrent speed for car with a platenumber " + car.getPlateNumber() + " is " + car.checkCurrentSpeed() + " km/h.");
// Create another instance with different data. 
let anotherCar = new Car("ABC-123");
anotherCar.setCurrentSpeed(60);
// Print out the info.
process.stdout.write("\nCurrent speed for car with a platenumber " + anotherCar.getPlateNumber() + " is " + anotherCar.checkCurrentSpeed() + " km/h.");
// Change the second car's speed. 
anotherCar.setCurrentSpeed(160);
// Make sure everything works as expected.
process.stdout.write("\nCurrent speed for car with a platenumber " + car.getPlateNumber() + " is " + car.checkCurrentSpeed() + " km/h.");
process.stdout.write("\nCurrent speed for car with a platenumber " + anotherCar.getPlateNumber() + " is " + anotherCar.checkCurrentSpeed() + " km/h.");

// Create a car object with plate number OOP-001.
let car = { plateNumber: "OOP-001", currentSpeed: 0 };
// Set car's speed to 120 km/h.
car.currentSpeed = 120;
// Print out the info about the car (plate number and current speed).
process.stdout.write("\nPlatenumber: " + car.plateNumber);
process.stdout.write("\nCurrent speed: " + car.currentSpeed);
// Create another instance with different data. 
let anotherCar = { plateNumber: "OOP-002", currentSpeed: 0 };
// Print out the info.
process.stdout.write("\nPlatenumber: " + anotherCar.plateNumber);
process.stdout.write("\nCurrent speed: " + anotherCar.currentSpeed);
// Change the second car's speed. 
anotherCar.currentSpeed = 60;
// Make sure everything works as expected.
process.stdout.write("\nPlatenumber: " + car.plateNumber);
process.stdout.write("\nCurrent speed: " + car.currentSpeed);
process.stdout.write("\nPlatenumber: " + anotherCar.plateNumber);
process.stdout.write("\nCurrent speed: " + anotherCar.currentSpeed);
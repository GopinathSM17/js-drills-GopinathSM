//1. get details of car whose id = 33
function carDetailsById(inventory, id) {
    if ( !Array.isArray(inventory)) {
        return "array not present in the given data";
    }
    if(id == undefined){
        return "id isn't specified";
    }
    for(const car of inventory){
        if(car.id == id){
            return "Car "+car.id+" is a "+car.car_year+" "+car.car_make+" "+ car.car_model;
        }
    }
    return "The specified Id is not present in the Inventory";
}

//2. Last car in inventory
function lastCarInInventory(inventory) {
    if ( !Array.isArray(inventory)) {
        return "array not present in the given data";
    }
    const inventoryLength=inventory.length;
    var lastCar=inventory[inventoryLength-1];
    return "Last car is a "+lastCar.car_make+" "+lastCar.car_model ;
}

//3. all the car models in alphabetical order
function allCarModelsInAlphabeticalOrder(inventory) {
    if ( !Array.isArray(inventory)) {
        return "array not present in the given data";
    }
    let carModels=[];
    for(const car of inventory){
        carModels.push(car.car_model);
    }
    carModels.sort();
    return carModels;
}

//4. Give all years of each car

function allYearsOfTheCars(inventory) {
    if ( !Array.isArray(inventory)) {
        return "array not present in the given data";
    }
   let allYears=[];
    for(const car of inventory){
        allYears.push(car.car_year);
    }
    allYears.sort();
    return allYears;
}

//5. return number of cars manufactured before a specific year
function numberOfCarsManufacturedBeforeSpecificYear(allYears, year) {
    if ( !Array.isArray(allYears)) {
        return "array not present in the given data";
    }
    if(year == undefined){
        return "Year is not specified";
    }
    var numberOfcars=0;
    for(var i=0;i<allYears.length;i++){
        if(allYears[i] == year){
            return numberOfcars;
        }
        numberOfcars++;
    }
    return numberOfcars;
}

// BMW and Audi cars

function bmwAndAudiCars(inventory) {
    if ( !Array.isArray(inventory)) {
        return "array not present in the given data";
    }
    var cars=[];
    for(var car of inventory ){
        if(car.car_make == "BMW"){
            cars.push(car.car_model);
        }
        if(car.car_make == "Audi"){
            cars.push(car.car_model);
        }
    }
    return JSON.stringify(cars);
}



export {
    carDetailsById,
    lastCarInInventory,
    allCarModelsInAlphabeticalOrder,
    allYearsOfTheCars,
    numberOfCarsManufacturedBeforeSpecificYear,
    bmwAndAudiCars
}
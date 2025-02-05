import {
    carDetailsById,
    lastCarInInventory,
    allCarModelsInAlphabeticalOrder,
    allYearsOfTheCars,
    numberOfCarsManufacturedBeforeSpecificYear,
    bmwAndAudiCars
} from "./solution.js"

import inventory from "./inventory.js"


//----- test cases for problem1 ----

console.log("---------Problem 1---------");
console.log("testCase 1");
console.log(carDetailsById(inventory,10));
console.log("testCase 2");
console.log(carDetailsById(inventory,70));
console.log("testCase 3");
console.log(carDetailsById(inventory));
console.log("testCase 4");
console.log(carDetailsById());
console.log("testCase 5");
console.log(carDetailsById(33));


//----- test cases for problem2 ----

console.log("---------Problem 2---------");
console.log("testCase 1");
console.log(lastCarInInventory(inventory));
console.log("testCase 2");
console.log(carDetailsById());

//----- test cases for problem3 ----

console.log("---------Problem 3---------");
console.log("testCase 1");
console.log(allCarModelsInAlphabeticalOrder(inventory));
console.log("testCase 2");
console.log(allCarModelsInAlphabeticalOrder());

//----- test cases for problem4----

console.log("---------Problem 4---------");
console.log("testCase 1");
var allYears= allYearsOfTheCars(inventory);
console.log(allYears);
console.log("testCase 2");
console.log(allYearsOfTheCars());

//----- test cases for problem5----

console.log("---------Problem 5---------");
console.log("testCase 1");
console.log(numberOfCarsManufacturedBeforeSpecificYear(allYears, 2000));
console.log("testCase 2");
console.log(numberOfCarsManufacturedBeforeSpecificYear(allYears));
console.log("testCase 3");
console.log(numberOfCarsManufacturedBeforeSpecificYear());
console.log("testCase 4");
console.log(numberOfCarsManufacturedBeforeSpecificYear(2000));

//----- test cases for problem6----

console.log("---------Problem 6---------");
console.log("testCase 1");
console.log(bmwAndAudiCars(inventory));
console.log("testCase 2");
console.log(bmwAndAudiCars());

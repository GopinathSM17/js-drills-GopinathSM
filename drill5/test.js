const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

import {
    keys,
    values,
    map,
    pairs
} from "./solution.js";

console.log(keys(testObject));
console.log(values(testObject));
const mapOutput = map(testObject, (value) => {
    if (Number.isInteger(value)) {
        return value + 5;
    }
    return value;
});
console.log(mapOutput);

console.log(pairs(testObject));



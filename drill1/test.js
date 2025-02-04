// const {findAllEmail,hobbiesFor30yrOld}= require("../drill1/problem1.js");

// Imports the findAllEmail function to test 
import {findAllEmail} from "./problem.js";

// Imports the data from the var arrayoOfObjects
import data from "../data.js";


//----- test cases for problem1 ----

console.log("Problem 1");
console.log("testCase 1");
console.log(findAllEmail(data));
console.log("testCase 2");
console.log(findAllEmail());
console.log("testCase 3");
const noEmailData = [
    { 
        id: 1, 
        name: 'Alice', 
        age: 30,
        // email: 'alice@example.com',
        city: 'New York',
        country: 'USA',
        hobbies: ['reading', 'painting'],
        isStudent: false
     },
     { 
        id: 2, 
        name: 'Bob', 
        age: 25,
        // email: 'bob@example.com',
        city: 'London',
        country: 'UK',
        hobbies: ['playing guitar', 'hiking'],
        isStudent: true
     }
];
console.log(findAllEmail(noEmailData ));


//----- test cases for problem2 ----



// const {findAllEmail,hobbiesFor30yrOld}= require("../drill1/problem1.js");

// Imports the findAllEmail function to test 
import {findAllEmail,
         hobbiesFor30YearOld,
         studentsInAustralia,
         index3Person,
         allAges,
         firstHobby,
         nameAndEmailOfAge25,
         cityAndCountry
      } from "./problem.js";

// Imports the data from the var arrayoOfObjects
import data from "../data.js";


//----- test cases for problem1 ----

console.log("---------Problem 1---------");
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

console.log("---------Problem 2---------");
console.log("testCase 1");
console.log(hobbiesFor30YearOld(data));
console.log("testCase 2");
console.log(hobbiesFor30YearOld());


//----- test cases for problem3 ----

console.log("---------Problem 3---------");
console.log("testCase 1");
console.log(studentsInAustralia(data));
console.log("testCase 2");
console.log(studentsInAustralia());


//----- test cases for problem4 ----

console.log("---------Problem 4---------");
console.log("testCase 1");
console.log(index3Person(data));
console.log("testCase 2");
console.log(index3Person());


//----- test cases for problem5 ----

console.log("---------Problem 5---------");
console.log("testCase 1");
console.log(allAges(data));
console.log("testCase 2");
console.log(allAges());

//----- test cases for problem6 ----

console.log("---------Problem 6---------");
console.log("testCase 1");
console.log(firstHobby(data));
console.log("testCase 2");
console.log(firstHobby());

//----- test cases for problem7 ----

console.log("---------Problem 7---------");
console.log("testCase 1");
console.log(nameAndEmailOfAge25(data));
console.log("testCase 2");
console.log(nameAndEmailOfAge25());

//----- test cases for problem8 ----

console.log("---------Problem 8---------");
console.log("testCase 1");
console.log(cityAndCountry(data));
console.log("testCase 2");
console.log(cityAndCountry());




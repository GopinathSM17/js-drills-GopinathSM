import {
    interestInVideoGame,
    usersInGermany,
    userWithMastersDegree,
    userGroupBasedOnProgrammingLanguvage
} from "./solution.js"

import data from "./data.js"


//----- test cases for problem1 ----

console.log("---------Problem 1---------");
console.log("testCase 1");
console.log(interestInVideoGame(data));
console.log("testCase 2");
console.log(interestInVideoGame());

//----- test cases for problem2 ----

console.log("---------Problem 2---------");
console.log("testCase 1");
console.log(usersInGermany(data));
console.log("testCase 2");
console.log(usersInGermany());

// ----- test cases for problem3 ----

console.log("---------Problem 3---------");
console.log("testCase 1");
console.log(userWithMastersDegree(data));
console.log("testCase 2");
console.log(userWithMastersDegree());

// ----- test cases for problem4 ----

console.log("---------Problem 4---------");
console.log("testCase 1");
console.log(userGroupBasedOnProgrammingLanguvage(data));
console.log("testCase 2");
console.log(userGroupBasedOnProgrammingLanguvage());
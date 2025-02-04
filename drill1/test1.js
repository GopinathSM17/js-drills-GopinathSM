// const {findAllEmail,hobbiesFor30yrOld}= require("../drill1/problem1.js");

// Imports the findAllEmail function to test 
import {findAllEmail} from "./problem1.js";

// Imports the data from the var arrayoOfObjects
import data from "../data.js";


//----- test cases for problem1 ----

 // calls the function to get all the emails and store it in allEmails
var allEmails = findAllEmail(data);

// prints all the emails found in the allEmails
console.log(allEmails);

//----- test cases for problem1 ----

//----- test cases for problem2 ----
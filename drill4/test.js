

const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

import{
    each,
    map,
    reduce,
    find,
    filter
} from "./solution.js";


// problem 1
console.log("This output is for each");
// calling function for the higher order function
each(items, callbackForEach);

function callbackForEach(element, index) { // Callback function for each function
  console.log(element, index)
}

console.log("\n");

//problem 2
console.log("This output is for map");
map(items, (element,index) =>{
  console.log(element,index);
});

// function callbackForMap(element, index) { // Callback function for map function
//   console.log(element, index);
// }


//problem 3
console.log("This output is for reduce");
const reduceOutput = reduce(items, callbackForReduce, 0);
console.log(reduceOutput);

function callbackForReduce(acc,curr) {
  acc += curr;
  return acc;
}


//problem 4
console.log("This output is for find");
const findOutput = find(items, callbackForFind);
console.log(findOutput);

function callbackForFind(element) {
  if(element === 3){
    return true;
  }
}

//problem 5
console.log("This output is for filter");
const filterOutput = filter(items, callbackForFilter);
console.log(filterOutput);

function callbackForFilter(element) {
  if (element % 2 == 0){// finding all even numbers in the array
    return element;
  }
  return 0;
}



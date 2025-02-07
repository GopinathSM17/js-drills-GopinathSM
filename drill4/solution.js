//solution 1 (each function)
function each(elements, cb) { //higher order Function for each function
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i); // Pass the element and its index to the callback
  }
}



//solution 2 (map function )
function map(elements, cb) { //higher order Function for map function
  const newElements = [];
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i] * 2, i);
  }
  return newElements;
}


// solution 3 (reduce)
function reduce(elements, cb, startingValue) {
  let accumulator = startingValue;
  for (let i = 0; i < elements.length; i++) {
    accumulator = cb(accumulator, elements[i]);
  }
  return accumulator;
}

//solution 4
function find(elements, cb) {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i];
    }
  }
  return "not found in the array"
}

//solution 5
function filter(elements, cb) {
  var filteredArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) != 0) {
      filteredArray.push(elements[i]);
    }
  }
  return filteredArray;
}

// solution 6
function flatten(elements) {
  var result=[];
  for(var i=0; i<elements.length;i++){
    if(Array.isArray(elements[i])){
      result.push(...flatten(elements[i])); // ... it is spread operator
      // With ..., push adds each element separately
    }
    else{
      result.push(elements[i]);
    }
  }
  return result;
}


export {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
}

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

function filter(elements, cb) {
  var filteredArray = [];
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i]) != 0) {
      filteredArray.push(elements[i]);
    }
  }
  return filteredArray;
}

export {
  each,
  map,
  reduce,
  find,
  filter
}

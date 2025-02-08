import {
    counterFactory,
    limitFunctionCallCount,
    cacheFunction
} from "./solution.js";

//CounterFacory
console.log("CounterFactory");
const counterVariable = counterFactory(10);
console.log(counterVariable.increment());
console.log(counterVariable.decrement());
console.log(counterVariable.resetToZero());
console.log(counterVariable.increment());

//limitFunctionCallCount
console.log("Limit function call by count");
const limiterOutput = limitFunctionCallCount(callbackForLimit, 3);

function callbackForLimit(i) {
    console.log("Hi i'm the callback Function with iteration = "+ i);
}
limiterOutput();
limiterOutput();
limiterOutput();
limiterOutput();

//cacheFunction
console.log("Cache function");
var elements=[1,2,3,3,4,4,4,5];
const cacheOutput= cacheFunction(callbackForCache);

for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    cacheOutput(element);
}

function callbackForCache(element) {
    console.log("I'm the new element inside the cache memory "+ element);
}
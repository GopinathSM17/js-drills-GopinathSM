//Counter Factory using closure
function counterFactory(value) {
    var current = value;

    return {
        increment: function () {
            current++;
            return current;
        },
        decrement: function () {
            return --current;
        },
        resetToZero: function () {
            return 0;
        }
    };
}

// limitFunctionCallCount

function limitFunctionCallCount(cb, n) {
    var count = 1;
    return function limit() {
        if (count <= n) {
            cb(count);
            count++;
        }
        else {
            return null;
        }
    }
}

//cacheFunction
function cacheFunction(cb) {
    let set = new Set();
    return function cache(element) {
        if (set.has(element) == true) {
            return null;
        }
        else {
            set.add(element);
            cb(element);
        }
        // console.log(set);
    }
}
export {
    counterFactory,
    limitFunctionCallCount,
    cacheFunction
}
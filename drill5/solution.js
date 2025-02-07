function keys(obj) {
    let objectArray = [];
    for (const key in obj) {

        objectArray.push(key);
    }
    return objectArray;
}

function values(obj) {
    let valuesArray = [];
    for (const key in obj) {
        valuesArray.push(obj[key]);
    }
    return valuesArray;
}

function map(obj, cb) {
    let mappedArray = [];
    for (var key in obj) {
        mappedArray.push(cb(obj[key]));
    }
    return mappedArray;
}

function pairs(obj) {
    let mappedArray = [];
    for (const key in obj) {
        let keyValuePair = [];
        keyValuePair.push(key);
        keyValuePair.push(obj[key]);
        mappedArray.push(keyValuePair);
    }
    return mappedArray;
}


export {
    keys,
    values,
    map,
    pairs
}
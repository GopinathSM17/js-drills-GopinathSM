const items = [1, 2, 3, 4, 5, 5];

function each(items, cb) {
    var output=[];
    for(var i=0;i<items.length;i++){
        output.push(printElement(items[i]));
    }
    return output;
}

function printElement(item) {
    return item;
}


console.log(each(items,printElement));

export {
    each
}
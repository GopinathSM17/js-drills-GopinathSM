
// users interested in video games
function interestInVideoGame(data){
    var userNames=[];
    const keys = Object.keys(data); // Get all keys as an array
    //console.log(keys);
    for (let i = 0; i < keys.length; i++) {
            userNames.push(keys[i]);
    }
    return userNames;
}

export {
    interestInVideoGame
}
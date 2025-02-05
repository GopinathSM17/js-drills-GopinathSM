
//1. users interested in video games
function interestInVideoGame(data){
    
    if (typeof(data) != "object") {
        return "array not present in the given data";
    }
    var userNames=[];
    const keys = Object.keys(data); // Get all keys as an array
    for (let i = 0; i < keys.length; i++) {
            userNames.push(keys[i]);
    }
    return userNames;
}

//2. users in Germany
function usersInGermany(data){
    if (typeof(data) != "object") {
        return "array not present in the given data";
    }
    var germanyUser=[]
    for (let user in data) { // this is a best way to access any object in a set of object data
        if(data[user].nationality == "Germany"){
            germanyUser.push(user);
        }
    }
    return germanyUser;
}

//3. user's with master's degree
function userWithMastersDegree(data){
    if (typeof(data) != "object") {
        return "array not present in the given data";
    }
    var masterDegreeUsers=[];
    for(let user in data){
        if(data[user].qualification == "Masters"){
            masterDegreeUsers.push(user);
        }
    }
    return masterDegreeUsers;
}

//4. Group users based on their Programming language mentioned in their designation.
function userGroupBasedOnProgrammingLanguvage(data) {
    if (typeof(data) != "object") {
        return "array not present in the given data";
    }
    var golang=[];
    var javascript=[];
    var python=[];
    for(let user in data){
        var userProgrammingLanguvage= data[user].desgination;
        if(userProgrammingLanguvage.includes("Golang")){ // includes will check if Golang present in given string
            golang.push(user);
        }
        else if(userProgrammingLanguvage.includes("Javascript")){
            javascript.push(user);
        }
        else if(userProgrammingLanguvage.includes("Python")){
            python.push(user);
        }
    }
    const allLanguvages= { // push all the languvage into a array of object
        golang,
        javascript,
        python
    };
    return allLanguvages;
}
export {
    interestInVideoGame,
    usersInGermany,
    userWithMastersDegree,
    userGroupBasedOnProgrammingLanguvage
}
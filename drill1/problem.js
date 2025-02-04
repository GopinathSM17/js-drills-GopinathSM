//1. Find the Emial address of all individuals
function findAllEmail(data) {
    var emails = [];


    //if array not present in the given data
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    if (data.some(obj => "email" in obj)) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].email != undefined) {
                emails.push(data[i].email);
            }
        }
    }
    else { // property not present in the data
        return "email property is not present in any of the data fields";
    }

    return emails;
}

//2. Find the hobbies of 30 year old
function hobbiesFor30YearOld(data) {
    var hobbies = [];
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i].age >= 30) {
            hobbies.push(data[i].hobbies);
        }
    }
    return hobbies;
}
//3. students in Australia
function studentsInAustralia(data) {
    var australianStudents = [];

    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    for (var i = 0; i < data.length; i++) {
        if (data[i].isStudent && data[i].country == 'Australia') {
            australianStudents.push(data[i].name);
        }
    }
    return australianStudents;
}

//4. name and city for index 3 in the dataSet
function index3Person(data) {
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    var person = [];
    person.push(data[3].name);
    person.push(data[3].city);
    return person;
}

//5. All ages
function allAges(data) {
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    var ages = [];
    for (var i = 0; i < data.length; i++) {
        ages.push(data[i].name + " " + data[i].age);
    }
    return ages;
}

//6. First hobby 
function firstHobby(data) {
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    var hobbyOne = [];
    for (var i = 0; i < data.length; i++) {
        hobbyOne.push(data[i].hobbies[0]);
    }
    return hobbyOne;
}

//7. name an email's of people who's age is 25
function nameAndEmailOfAge25(data){
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    var nameAndEmail = [];
    for (var i = 0; i < data.length; i++) {
        if(data[i].age == 25){
            nameAndEmail.push(data[i].name+" "+data[i].email);
        }
    }
    return nameAndEmail;
}


//8. city and country of each people in the dataSet
function cityAndCountry(data){
    if (!Array.isArray(data)) {
        return "array not present in the given data";
    }
    var cityCountry = [];
    for (var i = 0; i < data.length; i++) {
        cityCountry.push(data[i].city+" , "+data[i].country);
    }
    return cityCountry;
}




export { findAllEmail, 
        hobbiesFor30YearOld,
        studentsInAustralia,
        index3Person,
        allAges,
        firstHobby,
        nameAndEmailOfAge25,
        cityAndCountry
    };
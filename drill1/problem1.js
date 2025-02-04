//Find the Emial address of all individuals
 function findAllEmail(data){
    var emails=[];

  
    //if array not present in the given data
    if (! Array.isArray(data)) {
        return "array not present in the given data";
    }
    if(data.some(obj => "email" in obj)){
        for(var i=0;i<data.length;i++){
            if(data[i].email != undefined){
                emails.push(data[i].email);
            }
        }
    }
    else{ // property not present in the data
        return "email property is not present in any of the data fields";
    }

    return emails;
 }


export {findAllEmail};
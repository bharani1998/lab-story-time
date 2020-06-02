//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromtown, hasNeighbour) {
    var address, distanceFromtown, hasNeighbour;
    let temp = typeof (address);
    let temp1 = typeof (distanceFromtown);
    let temp2 = typeof (hasNeighbour);
    return temp + temp1 + temp2;
}
//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily) {
    var parents, noOfSiblings, isNuclearFamily
    let temp = typeof (parents);
    let temp1 = typeof (noOfSiblings);
    let temp2 = typeof (hasNeighbour);

    if (typeof (parents) == String) {
        return true;
    }
    if (typeof (noOfSiblings) == Number) {
        return true;
    }
    if (typeof (hasNeighbour) == Boolean) {
        return true;
    }
    if (typeof (parents) != String) {
        return false;
    }
    if (typeof (noOfSiblings) != Number) {
        return false;
    }
    if (typeof (hasNeighbour) != Boolean) {
        return false;
    }




}


//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber) {
    if (ageInText == 'NaN' && isNaN(ageInNumber)) {
        return 'NaN';
    }
    if (isNaN(ageInText) || isNaN(ageInNumber)) {
        return NaN;
    }

}
//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) {
    var state = "No sweets for Karen's friend";
    var sum;
    for (var x = 0; x < 4; x++) {
        if (typeof (totalNoOfSweets) != 'Number') {
            return state;
        }
    }
    for (var x = 0; x < arguments.length; x++) {
        sum += arguments[0];
    }
    if (sum == 0) {
        return 0;
    }

}
//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(a) {
    var tem = a;
    var census;
    if (a == undefined) {
        return 'Technical Error!';
    } else if (typeof (a) == "string") {
        return 'Technical Error!';
    } else if (typeof (a) == "object") {
        return 'Technical Error!';
    } else {
        census = (tem - 32) / 1.8;
        return census;
    }
}
//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice) {

    var choice;
    if (choice == undefined) {
        return "Wasn't able to decide";
    } else {
        if (choice == 1) {
            return 'Take her daughter to a doctor';
        } else if (choice == -1) {
            return 'Break down and give up all hope';
        } else if (choice == 'I give up') {
            return "Refused to do anything for Karen";
        }

    }
}

//Progression 7:
function consoleKaren(strategies) {
    var strats = [];
    strats.push(strategies + " ");
    var x = strats.toString()
    return x.length;


}
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
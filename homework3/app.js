// Calculating birth year
function calculateBirthYear(birthYear){
    birthYear = Number(birthYear);
    if(Number.isNaN(birthYear)){
        return "Invalid year";
    }
    let currentDate = new Date();
    if(birthYear > currentDate.getFullYear()){
        return "You've entered a year past our current year";
    }
    return currentDate.getFullYear() - birthYear;
}

// Variable type and return
function returnTypeAndPrint(variable){
    console.log(typeof(variable));
    return typeof(variable);
}

// Calculate dog years
function calculateDogYears(years, dogOrHuman = "dog"){
    years = Number(years);
    if(Number.isNaN(years)){
        return "Invalid years input";
    }
    dogOrHuman = dogOrHuman.toLowerCase();
    if(years === 0){
        return "0?";
    }
    if(dogOrHuman === "dog"){
        if(years <= 1){
            return years*15;
        }
        if(years <= 2){
            return 15 + (years-1) * 9;
        }
        return 24 + (years - 2) * 5;
    }
    if(dogOrHuman === "human"){
        if(years <= 15){
            return years/15;
        }
        if(years <= 24){
            return (years - 15) / 9 + 1;
        }
        return (years - 24) / 5 + 2;
    }
    return "You didn't enter a valid dog/human";
}

// Birth year test
// const birthYearInput = prompt("Enter your birth year");
// console.log(calculateBirthYear(birthYearInput));

const nullObj = null;
const numberObj = 12;
const stringObj = "yes";
const boolObj = true;
let undefinedObj;

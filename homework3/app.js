// Temperature calculator
function toFarenheit(temperature){
    temperature = Number(temperature);
    if(Number.isNaN(temperature)){
        return "Invalid input";
    }
    return temperature * 1.8 + 32;
}

function toCelsius(temperature){
    temperature = Number(temperature);
    if(Number.isNaN(temperature)){
        return "Invalid input";
    }
    return (5/9) * (temperature-32);
}

// Calculating age
function calculateAge(birthYear){
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
    console.log(`Log form inside ${typeof(variable)}`);
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
    if(dogOrHuman === "dog" || dogOrHuman === "d"){
        if(years <= 1){
            return years*15;
        }
        if(years <= 2){
            return 15 + (years-1) * 9;
        }
        return 24 + (years - 2) * 5;
    }
    if(dogOrHuman === "human" || dogOrHuman === "h"){
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

// ATM
function atmWithdraw(request){
    if(request > accountBalance){
        return "Not enough money";
    }
    accountBalance -= request;
    return `${request} withdrawn / ${accountBalance} is new balcance`;
}

// ----- TESTS -----

// convert faren ---
const userTempC = prompt("Enter temperature in C");
console.log(toFarenheit(userTempC));

// convert celc ---
const userTempF = prompt("Enter temperature in F");
console.log(toCelsius(userTempF));

// Birth year test ---
const birthYearInput = prompt("Enter your birth year");
console.log(calculateAge(birthYearInput));

// Type test ---
const nullObj = null;
const numberObj = 12;
const stringObj = "yes";
const boolObj = true;
let undefinedObj;
console.log(`Form outside: ${returnTypeAndPrint(nullObj)}, ${returnTypeAndPrint(numberObj)}, ${returnTypeAndPrint(stringObj)}, ${returnTypeAndPrint(boolObj)}, ${returnTypeAndPrint(undefined)}`);

// Dog year calculation test ---
const yearInput = prompt("Enter age");
const dogOrHuman = prompt("Enter to conver to dog or human years (dog/human) (d/h)");
console.log(calculateDogYears(yearInput, dogOrHuman));

// ATM test ---
let accountBalance = 500;
let requestedAmmount = prompt("Enter ammount you would like to withdraw");
console.log(atmWithdraw(requestedAmmount));
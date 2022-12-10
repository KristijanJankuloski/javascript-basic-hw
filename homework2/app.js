const yearOfBirth = Number(prompt("What is your year of birth?"));

function calculateZodiacSign(year){
    if(Number.isNaN(year)){
        return "Invalid input";
    }

    const sign = (year - 4) % 12;
    if(sign === 0){
        return "Rat";
    }
    if(sign === 1){
        return "Ox";
    }
    if(sign === 2){
        return "Tiger";
    }
    if(sign === 3){
        return "Rabbit";
    }
    if(sign === 4){
        return "Dragon";
    }
    if(sign === 5){
        return "Snake";
    }
    if(sign === 6){
        return "Horse";
    }
    if(sign === 7){
        return "Goat";
    }
    if(sign === 8){
        return "Monkey";
    }
    if(sign === 9){
        return "Rooster";
    }
    if(sign === 10){
        return "Dog";
    }
    if(sign === 11){
        return "Pig";
    }

    return null;
}

console.log(`Your Chinease zodiac sign is ${calculateZodiacSign(yearOfBirth)}`);
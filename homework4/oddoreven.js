// Find number function
function hasEvenOdd(array, type){
    if(type.toLowerCase() === "even"){
        let counter = 0;
        for(item of array){
            if(item%2 === 0){
                counter++;
            }
        }
        return counter;
    }
    if(type.toLowerCase() === "odd"){
        let counter = 0;
        for(let item in array){
            if(item%2 !== 0){
                counter ++;
            }
        }
        return counter;
    }
    return "Invalid type";
}

// --- TEST CASE ---
const evenOddArr = [1,2,3,4,5,6,7,8];
const typeInput = "even"
console.log(`You have ${hasEvenOdd(evenOddArr, typeInput)} numbers that are ${typeInput} in the array`);
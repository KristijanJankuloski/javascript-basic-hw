function validateNumber(num){
    if(typeof(num) !== 'number' || Number.isNaN(num)){
        return false;
    }
    return true;
}

function sumOfNumbers(arr){
    sum = 0;
    for(item of arr){
        if(!validateNumber(item)){
            return "Invalid number in array";
        }
        sum += item;
    }
    return sum;
}

// --- TEST CASE ---
const testArr = [1,2,3,4,5];
const invalidArr = [1,"2",3,4,5];
console.log(sumOfNumbers(testArr));
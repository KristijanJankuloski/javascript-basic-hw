function sumOfMaxMin(array){
    let max = array[0];
    let min = array[0];

    for(let item of array){
        // Ako elementot vo nizata ne e broj da go ignorira
        item = Number(item);
        if(Number.isNaN(item)){
            continue;
        }
        if(item > max){
            max = item;
        }
        if(item < min){
            min = item
        }
    }
    return max + min;
}

// --- TEST CASE ---
const testNums = [3,5,6,8,11];
console.log(sumOfMaxMin(testNums));
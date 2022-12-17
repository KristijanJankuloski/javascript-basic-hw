function sumOfArray(arr){
    sum = 0;
    for(let item of arr){
        sum += item;
    }
    return sum;
}

const area = document.getElementById("printArea");
const numbers = [3,2,7,13,25,4];

area.innerText = `The sum of ${numbers[0]}`;
for(let i = 1; i < numbers.length; i++){
    area.innerText += ` + ${numbers[i]} `;
}
area.innerText += ` = ${sumOfArray(numbers)}`;
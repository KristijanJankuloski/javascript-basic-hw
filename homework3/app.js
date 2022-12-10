function sub(number1, number2){
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        return "Invalid input";
    }
    return number1 - number2;
}
function mult(number1, number2){
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        return "Invalid input";
    }
    return number1 * number2;
}
function div(number1, number2){
    if(Number.isNaN(number1) || Number.isNaN(number2)){
        return "Invalid input";
    }
    return number1 / number2;
}

let input1 = Number(prompt("Enter 1 number"));
let input2 = Number(prompt("Enter second number"));
console.log(`Subtraction ${sub(input1, input2)}, Multiplication ${mult(input1, input2)}, Division ${div(input1, input2)}`)
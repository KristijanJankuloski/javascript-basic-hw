const userInput = Number(prompt("How much money you got in dollars?"));

if(userInput <=0){
    console.log("U broke my guy");
} else if(userInput > 0 && userInput <= 500){
    console.log("Buy a laptop or smt");
} else if(userInput > 500 && userInput <= 10000){
    console.log("Start thinking about a car");
} else if(userInput > 10000 && userInput <= 100000){
    console.log("Think about a house");
} else if(userInput > 100000 && userInput <=100000000000){
    console.log("u rich");
} else if(userInput > 100000000000){
    console.log("Jeff Bezos?");
}else{
    console.log("is this even a number");
}

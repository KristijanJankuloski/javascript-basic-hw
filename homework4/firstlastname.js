function joinNames(names, surnames){
    if(names.length != surnames.length){
        return "Diferent array lenghts";
    }
    let joined = []
    for(i in names){
        i = Number(i);
        joined.push(`${(i+1)}. ${names[i]} ${surnames[i]}`);
    }
    return joined;
}

// --- TEST CASE ---
const namesArr = ["John","Bob", "Jill"];
const surnameArr = ["Doe", "Bobs", "Wurtz"];
console.log(joinNames(namesArr, surnameArr));
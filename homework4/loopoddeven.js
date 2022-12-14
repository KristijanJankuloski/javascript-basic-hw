// Ne ja svativ zadacava sekoj nov console.log ke vadi new line
// for(let i = 1; i<=20; i++){
//     if(i%2 === 0){
//         console.log(`${i}\n`);
//     }
//     else{
//         console.log(`${i} `);
//     }
// }

// Osven ako ne misli vo eden string da se stai in that case
let str = ""
for(let i = 1; i<=20; i++){
    if(i%2 === 0){
        str = str.concat('', `${i}\n`);
    }
    else{
        str = str.concat('', `${i} `);
    }
}
console.log(str);

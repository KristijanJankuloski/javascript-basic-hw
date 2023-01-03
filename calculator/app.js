function interpretString(arr) {
    if(!Number.isNaN(Number(arr))){
        return Number(arr);
    }
    for(let i in arr){
        if(arr[i] === '+'){
            let before = arr.slice(0, i);
            let after = arr.slice(Number(i)+1);
            console.log(after);
            return interpretString(before) + interpretString(after);
        }
    }
    for(let i in arr){
        if(arr[i] === '-'){
            let before = arr.slice(0, i);
            let after = arr.slice(Number(i)+1);
            return interpretString(before) - interpretString(after);
        }
    }
    for(let i in arr){
        if(arr[i] === '*'){
            let before = arr.slice(0, i);
            let after = arr.slice(Number(i)+1);
            return interpretString(before) * interpretString(after);
        }
    }
    for(let i in arr){
        if(arr[i] === '/'){
            let before = arr.slice(0, i);
            let after = arr.slice(Number(i)+1);
            if(after[0] === 0 || after[0] === '0'){
                return "ERROR";
            }
            return interpretString(before) / interpretString(after);
        }
    }
}

const btns = document.querySelectorAll('.btn');
const input = document.querySelector('.input');
input.innerHTML = "";
for(let btn of btns){
    btn.addEventListener('click', () => {
        if(btn.innerText === '='){
            let result = interpretString(input.innerText);
            if(Number.isNaN(result)){
                document.querySelector('.result').innerText = "ERROR";
                return;
            }
            document.querySelector('.result').innerText = result;
            return;
        }
        if(btn.innerText === 'C'){
            input.innerText = '';
            return;
        }
        if(btn.value === "back"){
            let back = input.innerText.split("");
            back.pop();
            input.innerText = back.join('');
            return;
        }
        console.log(btn.innerHTML);
        input.innerHTML += btn.innerText;
    })
}
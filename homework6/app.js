const rowIn = document.getElementById("row");
const columnIn = document.getElementById("col");
const tBody = document.getElementById("tableBody");


function updateTable(){
    rows = Number(rowIn.value);
    cols = Number(columnIn.value);
    tBody.innerHTML = "";
    for(let r = 0; r<rows; r++){
        let newRow = document.createElement("tr");
        for(let c = 0; c<cols; c++){
            let newData = document.createElement("td");
            newData.innerText = `Row: ${r+1} Colunm: ${c+1}`;
            newRow.appendChild(newData);
        }
        tBody.appendChild(newRow);
    }
}

columnIn.addEventListener("input", updateTable);
rowIn.addEventListener("input", updateTable);
const container = document.querySelector(".container");
const input = document.querySelector("input");
const create = document.querySelector(".create");
const clear = document.querySelector(".clear");

create.addEventListener("click", e => {

    const myInput = document.querySelector("#value").value;

    for (let i = 0; i < myInput; i++){
        let column = document.createElement("div");
        column.classList.add("column");
    
        for (let j = 1; j <= myInput; j++){
            let row = document.createElement("div");
            row.classList.add("row");
            row.style.border = '0.05px solid black';
            column.append(row);
        } 
        container.append(column);
        input:focus();
    }
});

clear.addEventListener("click", e => {
    
    const myInput = document.querySelector("#value").value;

    for (let i = 0; i < myInput; i++){
        let column = document.querySelector(".column");
        column.classList.add("column");
        container.removeChild(column);
    }
})
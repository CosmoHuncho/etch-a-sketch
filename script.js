const button = document.getElementById("btn");
let choice = 0;
button.addEventListener('click', () => {
    choice = prompt("Enter how many squares you would like.");

    makeGrid(choice);
});


const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = '#3498db';
        });

        row.appendChild(square);
    }

    container.appendChild(row);
}


function makeGrid(promptChoice){ 

    container.innerHTML = '';

    for (let i = 0; i < promptChoice && promptChoice <= 100; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < promptChoice && promptChoice <= 100; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            square.addEventListener('mouseenter', () => {
                square.style.backgroundColor = '#3498db';
            });

            row.appendChild(square);
        }

        container.appendChild(row);
    }
}
function makeGrid(rows) {
    const grid = document.querySelector(".grid");
    const side = 480.0/rows - 1;
    for (let i = 0; i < rows; i++) {
        const gridRow = document.createElement("div");
        for (let j = 0; j < rows; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.height = `${side}px`;
            square.style.width = `${side}px`;
            square.addEventListener('mouseover', () => {
                square.classList.add("hover");
            });
            gridRow.appendChild(square);
        }
        grid.appendChild(gridRow);
    }
}

function resetGrid() {
    let width = prompt("please input the dimension of your new grid, between 1-100.");
    if (width < 1 || width > 100) {
        alert("please input a number between 1 and 100!");
    }
    const grid = document.querySelector(".grid");
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }
    makeGrid(width);
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    resetGrid();
});

makeGrid(16);
function makeGrid(rows) {
    const grid = document.querySelector(".grid");
    for (let i = 0; i < rows; i++) {
        const gridRow = document.createElement("div");
        for (let i = 0; i < rows; i++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener('mouseover', () => {
                square.classList.add("hover");
            });
            gridRow.appendChild(square);
        }
        grid.appendChild(gridRow);
}
}

makeGrid(16);
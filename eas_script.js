function createGrid(){
    for (let i = 0; i<256; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "gridSquare";
        containerDiv.appendChild(gridDiv);
        gridDiv.addEventListener("mouseover", ()=> {
            gridDiv.style.backgroundColor = "black";
        })
        
    }
}

const containerDiv = document.querySelector("#gridContainerDiv");
createGrid();


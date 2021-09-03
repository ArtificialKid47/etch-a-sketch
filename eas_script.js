function createGrid(){
    for (let i = 0; i<gridsize; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.className = "gridSquare";
        containerDiv.appendChild(gridDiv);
    }

}

const containerDiv = document.querySelector("#gridContainerDiv");
const clearButt = document.querySelector("#clearButton");
let gridsize = 256;

createGrid();

let paintDiv = document.querySelectorAll(".gridSquare");

clearButt.addEventListener("click", () => {
    containerDiv.innerHTML = "";
    let promptSize = Number(prompt("Grid size?","16"))
    gridsize = promptSize * promptSize;
    createGrid();
    paintDiv = document.querySelectorAll(".gridSquare");
    paintDiv.forEach(function(element){
        let width1 = (400/promptSize) + "px";
        let height1 = (400/promptSize) + "px";
        element.style.width = width1;
        element.style.height = height1;
        element.addEventListener("mouseover",() => {
            element.style.backgroundColor = "black";
        } );

        
    })
})


paintDiv.forEach(function(element){
    element.addEventListener("mouseover",() => {
        element.style.backgroundColor = "black";
    } )
})
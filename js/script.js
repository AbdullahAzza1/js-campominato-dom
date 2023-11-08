let numCelle = 100;
let grid = document.getElementById("griglia");

for (let i = 1; i <= numCelle; i++) {

    let cella = creaQuadrato(i);
    grid.appendChild(cella);

}


function creaQuadrato(numero) {

    const cella = document.createElement("div");
    cella.classList.add("quadrati");


    cella.addEventListener("click", function () {

        console.log("Cella cliccata", numero);

        cella.classList.toggle("highlight");

    });

    return cella;
}
//creiamo dei numeri casuali
let num = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16];

for (let i = 0; i < grid.length; i++) {

    grid.style

    console.log("cella giusta", num);

}



const bottoneGeneraGriglia = document.getElementById ("genera-griglia");


const contenitoreGriglia = document.getElementById ("contenitore-griglia");


bottoneGeneraGriglia.addEventListener ('click', generatoreGriglia);


function generatoreGriglia () {

contenitoreGriglia.innerHTML = '';

for (let i = 1 ; i <= 100; i++){

const elementoGriglia = document.createElement('div');
elementoGriglia.classList.add("elemento-griglia");
elementoGriglia.innerText = i;
elementoGriglia.addEventListener ('click', gestisciClick)
contenitoreGriglia.appendChild(elementoGriglia);

}
}

function gestisciClick (event) {
const elementoCliccato = event.target;
elementoCliccato.classList.add ('clicked');

const elementoG = elementoCliccato.innerText;

console.log("Hai cliccato sulla cella numero : " + elementoG);

}
//localStorage.clear();
const bodyElDOM = document.querySelector('body');
const contadorVisitas = document.getElementById('contadorVisitas');

function contarVisitantes (reset) {
    if (localStorage.getItem('numeroVisitas') === null){
        localStorage.setItem('numeroVisitas', reset);
        contadorVisitas.innerText = localStorage.getItem('numeroVisitas');
    }
    else {   
        let contador = parseFloat(localStorage.getItem('numeroVisitas')) + 1;
        localStorage.setItem('numeroVisitas', contador); 
        contadorVisitas.innerText = localStorage.getItem('numeroVisitas');
    }    
}

let inicio = 0;
contarVisitantes (inicio + 1); // Entiendo que la primera vez que se carge ya es la primera visita
//showLinks();

const btnReestablecer = document.getElementById('btnReestablecer');
btnReestablecer.addEventListener('click', () => {
    localStorage.removeItem('numeroVisitas');
    contarVisitantes(inicio);
});

/*
function showLinks(){
    const title= document.createElement('h3');
    title.innerText = 'Aquí puedes encontrar otros proyectos en Github';
    const ulElem = document.createElement('ul');
    const liElem= document.createElement('li');
    liElem.innerHTML = '<a href="https://github.com/lmatani/select-pokemon" target="blank">Pokemon</a>';
    ulElem.appendChild(liElem);
    const liElem2= document.createElement('li');
    liElem2.innerHTML = '<a href="https://github.com/lmatani/Developflix" target="blank">Developflix</a>';
    ulElem.appendChild(liElem2);
    const liElem3= document.createElement('li');
    liElem3.innerHTML = '<a href="https://github.com/lmatani/rick-and-morty-characters" target="blank">Rick And Morty Characters</a>';
    ulElem.appendChild(liElem3);
   
    const div = document.createElement('div');
    div.id = 'lista';
    div.appendChild(title); 
    div.appendChild(ulElem); 
    console.log(bodyElDOM);
    bodyElDOM.appendChild(div);
}*/
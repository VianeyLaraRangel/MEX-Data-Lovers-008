//Variables globales con el acceso a la data
const pokemonesArray = POKEMON.pokemon;
const pokemonesObject = Object.values(POKEMON.pokemon);
const cardTemplate = document.getElementById('card-box-specific');
const inputString = document.getElementById('input-string');

//Nodos
const cardBox = document.getElementById('card-box');
const cardsGeneral = document.getElementById('cards-general');
const cardResult = document.getElementById('imprime-nodo');

//Botones
const buttonHomePokemones = document.getElementById('pokebola-imprime-todos');
const buttonSearchPokemon = document.getElementById('busca-pokemon');
const buttonAsc = document.getElementById('boton-asc');
const buttonDesc = document.getElementById('boton-desc');
const buttonPokeType = document.getElementsByClassName('btn-pok');

//Botones de instrucciones(modal)
const buttonHelp = document.getElementById('ayuda-modal');
const closeButtonHelp = document.getElementById('close');

//Función que esconde una sección con id
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};

//Función que muestra una seccion con id 
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};

//Funcionalidad del modal (retorno implícito)
const showInstructions = () => showSection('instructions');
const closeInstructions = () => hideSection('instructions');

//Eventos de las funciones declaradas
buttonHelp.addEventListener('click', showInstructions);
closeButtonHelp.addEventListener('click', closeInstructions);

//Eventos que usan template string
buttonHomePokemones.addEventListener('click', () => {
    printData(pokemonesArray);
});

buttonSearchPokemon.addEventListener('click', (event) => {
    event.preventDefault();
    let inputStringSearch = inputString.value;
    let filterDataByName = window.filterData(inputStringSearch);
    //console.log(filterArray);
    printData(filterDataByName);
});

//Eventos de los nodos
buttonAsc.addEventListener('click', () => {
    //Escribir un bucle que itere por el arreglo
    for (let i = 0; i < pokemonesArray.length; i++) {
        let pokemonesObject = POKEMON.pokemon[i];

        //Crear elementos (html)
        let pokeName = document.createElement('h2');
        let pokeImg = document.createElement('img');
        let pokeType = document.createElement('p');
        //Crear nodos (contenido de los hijos para su madre/padre)
        let pokeNameContent = document.createTextNode(pokemonesObject.name);
        console.log(pokeNameContent);

        let pokeImgContent = document.createTextNode(pokemonesObject.img);
        console.log(pokeImgContent);

        let pokeTypeContent = document.createTextNode(Object.values(pokemonesObject.type));
        console.log(pokeTypeContent);

        //Hacer de los nodos hijos de los elementos
        pokeName.appendChild(pokeNameContent);
        pokeName.setAttribute('align', 'center');

        pokeImg.appendChild(pokeImgContent);
        pokeImg.setAttribute('src', pokemonesObject.img);

        pokeType.appendChild(pokeTypeContent);


        cardResult.appendChild(pokeName);
        cardResult.appendChild(pokeImg);
        cardResult.appendChild(pokeType);

        cardBox.appendChild(cardResult);
    }
});

buttonDesc.addEventListener('click', () => {
    alert('funciona');
});


//Funciones declaradas que usan template string
const printData = (pokemonesArray) => {
    let str = '';
    pokemonesArray.forEach(element => {
        str += `<div class="row lateral-content">
        <div class="col-2-specific" id="imprime-nodo-specific">
          <h2>${element.name}</h2>
          <img src="${element.img}">
          <p>
            <h1>${element.num}</h1>
            <span>Tipo: ${element.type}</span>
            <br>
            <span>Altura: ${element.height}</span>
            <br>
            <span>Peso: ${element.weight}</span>
            <br>
            <span>Distancia p/huevo: ${element.egg}</span>
            <br>
            <span>Debilidades: ${element.weaknesses}</span>
            <br>
          </p>
        </div>
      </div>`;
    });
    cardTemplate.innerHTML = str;
};

//Funciones declaradas que usan nodos del DOM 
// const pokeNodes = () => {
//     console.log(pokeNodes);
// };

//Función para saber a cual botón de los tipos dió click

for (let i = 0; i < buttonPokeType.length; i++) {
    buttonPokeType[i].addEventListener("click", (event) => {
        let targetId = event.target.parentElement.id;
        let resultTargetId = [];
        // switch (targetId) {
        //     case "poison":
        //         resultTargetId.push(window.filterDataByType(targetId));
        //         // console.log(resultTargetId);
        //         printData(resultTargetId);
        //         break;
        //     case "grass":
        //         resultTargetId = window.filterDataByType(targetId);
        //         printData(resultTargetId);
        //         break;
        //     case "fire":
        //         resultTargetId = window.filterDataByType(targetId);
        //         printData(resultTargetId);
        //         break;
        //     case "electric":
        //         resultTargetId = window.filterDataByType(targetId);
        //         printData(resultTargetId);
        //         break;
        //     case "water":
        //         resultTargetId = window.filterDataByType(targetId);
        //         printData(resultTargetId);
        //         break;
        //     case "rock":
        //         resultTargetId = window.filterDataByType(targetId);
        //         printData(resultTargetId);
        //         break;
        //     case "bug":
        //         resultTargetId = window.filterDataByType(targetId);
        //         printData(resultTargetId);
        //         break;
        // }
        resultTargetId = window.filterDataByType(targetId);
        printData(resultTargetId);
    });
}
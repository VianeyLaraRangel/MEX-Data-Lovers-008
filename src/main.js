//Variables globales con el acceso a la data para iterar
const pokemonesArray = POKEMON.pokemon;
const pokemonesObject = POKEMON.pokemon[0];
const cardTemplate = document.getElementById('card-box-specific');

//Botones
const buttonHomePokemones = document.getElementById('pokebola-imprime-todos');
//Boton instrucciones
const buttonHelp = document.getElementById('ayuda-modal');
const closeButtonHelp = document.getElementById('close');

//Función que esconde una sección con id
const hideSection = (id) => {
    document.getElementById(id).classList.add('hide');
};
//funcion que muestra una seccion con id
const showSection = (id) => {
    document.getElementById(id).classList.remove('hide');
};

//Funcionalidad del modal
const showInstructions = () => showSection('instructions');
const closeInstructions = () => hideSection('instructions');

buttonHelp.addEventListener('click', showInstructions);
closeButtonHelp.addEventListener('click', closeInstructions);


const buttonSearchPokemon = document.getElementById('busca-pokemon');
const buttonAsc = document.getElementById('boton-asc');
const buttonDesc = document.getElementById('boton-desc');
//Seis (6) botones
const buttonPokeType = document.getElementById('poison-type');

//Nodos
const cardBox = document.getElementById('card-box');
const cardsGeneral = document.getElementById('cards-general');
const cardResult = document.getElementById('imprime-nodo');

//Funciones declaradas
const printData = (pokemonesArray) => {
    let str = '';

    pokemonesArray.forEach(element => {
        str += `<div class="row lateral-content">
        <div class="col-2-specific" id="imprime-nodo-specific">
          <h2>${element.name}</h2>
          <img src="${element.img}">
          <p>
            <span>Tipo: ${element.type[0]}, ${element.type[1]}</span>
            <br>
            <span>Altura:</span><br>
            <span>Peso:</span><br>
            <span>Huevo(distancia):</span><br>
            <span>Debilidades:</span><br>
          </p>
        </div>
      </div>`;
    });
    cardTemplate.innerHTML = str;
};
//Eventos

buttonHomePokemones.addEventListener('click', () => {
    printData(pokemonesArray);
});


buttonSearchPokemon.addEventListener('click', () => {
    alert('funciona');
});

buttonAsc.addEventListener('click', () => {
    alert('funciona');
});

buttonDesc.addEventListener('click', () => {
    alert('funciona');
});

//Primer boton de los tipos para ordenar
buttonPokeType.addEventListener('click', () => {
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
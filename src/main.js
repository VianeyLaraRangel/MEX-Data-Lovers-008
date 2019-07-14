//onload = window.alert('Bienvenido a pokepedia!');
//Variables globales con el acceso a la data para iterar
const pokemonesArray = POKEMON.pokemon;
const pokemonesObject = POKEMON.pokemon[0];

//Declarar todos los botones que usaremos
const buttonHomePokemones = document.getElementById('pokebola-imprime-todos');
const buttonHelp = document.getElementById('ayuda-modal');
const buttonSearchPokemon = document.getElementById('busca-pokemon');
const buttonAsc = document.getElementById('boton-asc');
const buttonDesc = document.getElementById('boton-desc');
//Seis (6) botones
const buttonPokeType = document.getElementById('poison-type');

//Declarar variables en donde se imprimen los nodos
const cardBox = document.getElementById('card-box');
const cardsGeneral = document.getElementById('cards-general');
const cardResult = document.getElementById('imprime-nodo');

//a)Evento para imprimir todos los pokemones en la pantalla principal
buttonHomePokemones.addEventListener('click', () => {
   //Escribir un bucle que itere por el arreglo
   for (let i = 0; i < pokemonesArray.length; i++) {
           let pokemonesObject = POKEMON.pokemon[i];
           let printCard = Object.keys(pokemonesObject);

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

buttonHelp.addEventListener('click', () => {
   alert('funciona');
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
   alert('funciona');
});
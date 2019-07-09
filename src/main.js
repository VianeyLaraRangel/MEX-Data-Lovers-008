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
// //Section
const cardBox = document.getElementById('card-box');
//Row
const cardsGeneral = document.getElementById('cards-general');
//col-8 
const cardResult = document.getElementById('imprime-nodo');

//a)Evento para imprimir todos los pokemones en la pantalla principal
buttonHomePokemones.addEventListener('click', () => {
    //Escribir un bucle que itere por el arreglo
    for (let i = 0; i < pokemonesArray.length; i++) {
            let printCard = [];
            let pokemonesObject = POKEMON.pokemon[i];
            printCard = Object.keys(pokemonesObject);
            printCardValues = Object.values(printCard);

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


        // cardResult.insertBefore(imgElement, cardResult.childNodes[i]);
    }
    // const mostrarPropiedades = (objeto, nombreObjeto) => {
    //     let resultado = '';
    //     for (let i in objeto) {
    //       //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
    //       if (objeto.hasOwnProperty(i)) {
    //           resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
    //       }
    //     }
    //     return resultado;
    //   };
    //   console.log(mostrarPropiedades(miAuto, "miAuto"));
});

// // 1.Crear nodo de texto
// // 1.1 Llamar las cajas con las que vamos a trabajar
// // const cardsGeneral = document.getElementById('cards-general');
// // const cardOne = document.getElementById('card-one');
// // console.log(cardsGeneral);
// // console.log(cardOne);
// //1.2 Crear un elemento
// const element = document.createElement('h2');
// //1.3 Crear un nodo de texto
// const contenidoDeElement = document.createTextNode(pokemonesObject.name);
// console.log(contenidoDeElement);
// //1.4 Añadir el nodo de texto al elemento
// element.appendChild(contenidoDeElement);
// //1.5 Agregar atributos al elemento
// element.setAttribute('align', 'center');
// //1.6 Agregar el elemento al documento
// document.getElementById('imprime-nodo').appendChild(element);

// //2. Crear nodo de imagen
// //2.1 Llamar la constante que guarda la card
// console.log(cardsGeneral);
// console.log(cardOne);
// //2.2 Crear un elemento img
// const imgElement = document.createElement('img');
// //2.3 Agregar la imagen al elemento con el atributo src
// imgElement.setAttribute('src', pokemonesObject.img);
// //2.4 Agregar el elemento al documento
// document.getElementById('imprime-nodo').appendChild(imgElement);

// for (let i = 0; i < pokemonesArray.length; i++) {
//     let pokemonesObject = POKEMON.pokemon[i];
//     console.log(pokemonesObject);
//     console.log(pokemonesObject.name);
//     console.log(pokemonesObject.img);
//     console.log(pokemonesObject.id);
//     console.log(pokemonesObject.type[0]);
//     for (const key in pokemonesObject) {
//         //LLave del objeto
//         //console.log(key);
//         if (pokemonesObject.hasOwnProperty(key)) {
//             const property = pokemonesObject[key];
//             //Propiedad del objeto
//             console.log(property);
//             //Inserta tantas veces como itera
//             printCard.push(property) * (i);
//             //Estoy iterando mucho!! vale 2326
//             console.log(printCard.length);
//         } else if (printCard.length === i) {
//             const elementName = document.createElement('h2');
//             const contentName = document.createTextNode(pokemonesObject.name);
//             elementName.appendChild(contentName);
//             cardResult.appendChild(elementName);


// pokemonesObject.push(cardPokeArray);
// console.log(cardPokeArray);
// for (let key in pokemonesObject) {
//     console.log(pokemonesObject);
//     // if (pokemonesObject.hasOwnProperty(key)) {
//     //     const element = pokemonesObject[key];
//     //     cardPokeArray.push(element);
//     //     console.log(cardPokeArray);
//     // }
// }

// pokemonesArray.forEach((pokemones) => {
//     console.log(pokemones);
//     let elementName = document.createElement('h2');

//             let contentName = document.createTextNode(pokemonesObject.name);
//             elementName.appendChild(contentName);

//             cardResult.appendChild(elementName);
//             cardPokeArray.push(cardResult);
//     }
// });
// return cardPokeArray;


buttonHelp.addEventListener('click', () => {
    //alert('funciona');
});

buttonSearchPokemon.addEventListener('click', () => {
    //alert('funciona');
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



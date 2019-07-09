//PRUEBA DE CONSOLA
//console.log(POKEMON.pokemon[0].name);

//Rutas a los datos para pasarlos
//console.log(POKEMON);
console.log(POKEMON.pokemon[0].name);
console.log(POKEMON.pokemon[0].img);

//Declarar una variable en donde se guarde la llamada de la función con el acceso a la data
//Esta ruta va a servir para iterar sobre eso

let pokemonesObject = POKEMON.pokemon[0];
console.log(pokemonesObject);

//Declarar todos los botones que usaremos


//Escribir una función que itere por el arreglo para pasarla a un evento que escuche un click

//1.Crear nodo de texto
//1.1 Llamar las cajas con las que vamos a trabajar
const cardsGeneral = document.getElementById('cards-general');
//console.log(cardsGeneral);
const cardOne = document.getElementById('card-one');
//console.log(cardOne);
//1.2 Crear un elemento
const element = document.createElement('h2');
//1.3 Crear un nodo de texto
const contenidoDeElement = document.createTextNode(pokemonesObject.name);
console.log(contenidoDeElement);
//1.4 Añadir el nodo de texto al elemento
element.appendChild(contenidoDeElement);
//1.5 Agregar atributos al elemento
element.setAttribute('align', 'center');
//1.6 Agregar el elemento al documento
document.getElementById('imprime-nodo').appendChild(element);

//2. Crear nodo de imagen
//2.1 Llamar la constante que guarda la card
console.log(cardsGeneral);
console.log(cardOne);
//2.2 Crear un elemento img
const imgElement = document.createElement('img');
//2.3 Agregar la imagen al elemento con el atributo src
imgElement.setAttribute('src',pokemonesObject.img);
//2.4 Agregar el elemento al documento
document.getElementById('imprime-nodo').appendChild(imgElement);



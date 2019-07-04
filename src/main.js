//Aquí se debe manipular el DOM

//Declarar una variable en donde se guarde la llamada de la función con el acceso a la data
//Declarar todos los botones que usaremos

//1.Crear nodo
//1.1 Llamar las cajas con las que vamos a trabajar
const cardsGeneral = document.getElementById('cards-general');
console.log(cardsGeneral);
const cardOne = document.getElementById('card-one');
console.log(cardOne);
//1.2 Crear un elemento
const element = document.createElement('h2');
//1.3 Crear un nodo de texto
const contenidoDeElement = document.createTextNode('Esta es la card');
//1.4 Añadir el nodo de texto al elemento
element.appendChild(contenidoDeElement);
//1.5 Agregar atributos al elemento
element.setAttribute('align', 'center');
//1.6 Agregar el elemento al documento
document.getElementById('imprime-nodo').appendChild(element);


//Pasarle los datos
console.log(POKEMON);
console.log(POKEMON.pokemon[0].name);
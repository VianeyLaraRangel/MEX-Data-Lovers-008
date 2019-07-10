const getData = () => {
  const pokemonesArray = [];
  const data = POKEMON.pokemon;

  pokemonesArray.push(data);
  //console.log(pokemonesArray);
  return 'getData';
};

//filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.

// sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

//computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.


//Agregarlo al objeto global
window.getData = getData();

//1.Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
//2.Permitir al usuario filtrar y ordenar la data.
//3.Calcular estadísticas de la colección (o subcolección) como media aritmética, máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece un determinado valor, por ejemplo.
//4.Visualizarse sin problemas desde distintos tamaños de pantallas: móviles, tablets y desktops.


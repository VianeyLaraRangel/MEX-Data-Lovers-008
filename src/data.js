const pokeData = POKEMON.pokemon;


const filterData = (string) => {
  let search = string.charAt(0).toUpperCase() + string.slice(1);

  let searchResult = [];

  pokeData.forEach(element => {
    if (element.name.indexOf(search) !== -1) {
      searchResult.push(element);
    }
  });
  return searchResult;
};

const filterDataByType = (id) => {
  let search = id.charAt(0).toUpperCase() + id.slice(1);
  let searchResult = [];

  pokeData.forEach(element => {
    element.type.forEach(type => {
      console.log(type, search);
      if (type === search) {
        searchResult.push(element);
      }
    });
  });
  return searchResult;
};

//Como? sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

const sortData = (data, sortBy, sortOrder) => {

  return 'sortData';
};

//computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.//Objetivo: 3.Calcular estadísticas de la colección (o subcolección) como media aritmética, máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece un determinado valor, por ejemplo.

const computeStats = (data) => {

  return 'computeStats';
};

// //Agregarlo al objeto global

window.filterData = filterData;
window.filterDataByType = filterDataByType;
//window.sortData = sortData;
  // window.computeStats = computeStats();
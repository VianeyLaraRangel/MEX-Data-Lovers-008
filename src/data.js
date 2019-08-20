const pokeData = window.POKEMON.pokemon;

const filterData = (string) => {
  let search = string.charAt(0).toUpperCase() + string.slice(1);

  let searchResult = [];

  pokeData.forEach(element => {
    if (element.name.indexOf(search) !== -1) {
      searchResult.push(element);
      console.log(searchResult);
    }
  });
  return searchResult;
};

const filterDataByType = (id) => {
  let search = id.charAt(0).toUpperCase() + id.slice(1);
  let searchResult = [];

  pokeData.forEach(element => {
    element.type.forEach(type => {
      if (type === search) {
        searchResult.push(element);
      }
    });
  });
  return searchResult;
};

const filterByWeakness = (value) => {
  let search = value.charAt(0).toUpperCase() + value.slice(1);
  let optionResult = [];
  pokeData.forEach(element => {
    element.weaknesses.forEach(weak => {
      if (weak === search) {
        optionResult.push(element);
      }
    });
  });
  return optionResult;
};

const sortData = (sortOrder) => {
  let sortedResult = [];
  let sortBy;
  let array = [];
  pokeData.forEach(element => {
    sortedResult.push(element.num);
  });
  if (sortOrder === 'asc') {
    sortBy = sortedResult.sort();
    console.log(sortBy);
  } else {
    sortBy = sortedResult.sort();
    sortBy.reverse();
    console.log(sortBy);
  }
  for (let i = 0; i < sortBy.length; i++) {
    pokeData.forEach(element => {
      if (sortBy[i] === element.num) {
        array.push(element);
      }
    });
  }
  return array;
};

//computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.//Objetivo: 3.Calcular estadísticas de la colección (o subcolección) como media aritmética, máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece un determinado valor, por ejemplo.

// const computeStats = (data) => {

//   return 'computeStats';
// };

//Agregarlo al objeto global

window.filterData = filterData;
window.filterDataByType = filterDataByType;
window.filterByWeakness = filterByWeakness;
window.sortData = sortData;
//window.sortData = sortData;
// window.computeStats = computeStats();
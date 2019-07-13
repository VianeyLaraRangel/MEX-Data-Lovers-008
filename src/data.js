//Objetivo: 1.Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
window.getData = {
    
  filterByType: (pokeData, typeValue) => {
      let filterByType = pokeData.filter(element => element.type.find((type)=> type === typeValue));
      console.log(filterByType);
      return filterByType;
  }  
};

  //Objetivo: 2.Permitir al usuario filtrar y ordenar la data. Como?filterData(data, condition): esta función filter o filtrar recibiría la data, y nos retornaría aquellos datos que sí cumplan con la condición.
  const filterData = (data, condition) => {
  //   const newData = data.filter(index => {
  //     return item.type.find((type)=> type === SelectType);
  //   });

     return 'newData';
  };

  //Objetivo: 3.Calcular estadísticas de la colección (o subcolección) como media aritmética, máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece un determinado valor, por ejemplo. Como? sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

  const sortData = (data, sortBy, sortOrder) => {

    return 'sortData';
  };

  //computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada.
  const computeStats = (data) => {

    return 'computeStats';
  };

  // //Agregarlo al objeto global
  // window.getData = getData();
  // window.filterData = filterData();
  // window.sortData = sortData();
  // window.computeStats = computeStats();
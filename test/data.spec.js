require('../src/data.js');

//Test para filter data

// describe('filterData', () => {
//   it('Debería ser una función', () => {
//     assert(typeof filterData, 'function', 'Es una función');
//   });

// //   it ('Debería retornar los objetos que coincidan con lo tecleado en el input de búsqueda', () => {
// // assert.equal(typeof filterData(), "Es una función");
// //   });
// });

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  // it('returns "array"', () => {
  //   expect(filterData).toBe('function');
  // });
});
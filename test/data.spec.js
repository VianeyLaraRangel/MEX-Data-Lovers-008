require('../src/data.js');
// const testIntoFilterDataSearchResult = require('../src/data.js:5:16');
//Test filterData
describe('filterData', () => {
  //Es una función
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });
});

//Ejemplo de la documentación de mocha
const assert = require('assert');
describe('Array', () => {
  //Cómo encontrará la coincidencia el indexOf
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
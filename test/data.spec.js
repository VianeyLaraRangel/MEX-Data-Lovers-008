// import {expect} from 'chai';
require('./src/data.js');

//Test para filter data
describe('filterData', () => {
  it('is a object', () => {
    expect(typeof 'object').toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

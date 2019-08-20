// import {expect} from 'chai';
require('./src/data.js');

//Test para filter data
describe('filterData', () => {
  it('is function', () => {
    expect(typeof 'function').toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});

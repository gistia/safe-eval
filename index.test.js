const safeEval = require('./index');
const expect = require('chai').expect;

describe('safeEval', () => {
  it('evaluates with context', () => {
    expect(safeEval('value + 1', { value: 1 })).to.equal(2);
  });
});

const fs = require('fs');
const expect = require('chai').expect;

const safeEval = require('./index');

describe('safeEval', () => {
  it('evaluates with context', () => {
    expect(safeEval('value + 1', { value: 1 })).to.equal(2);
  });

  it('works with no context', () => {
    expect(safeEval('1 + 1')).to.equal(2);
  });

  it('works with null expression', () => {
    expect(safeEval(null)).to.be.undefined;
  });

  it('works with expressions', () => {
    const expr = '{ nextState: value > 10 ? "ok" : "missing", attributes: { value } }';
    expect(safeEval(expr, { value: 10 }).nextState).to.equal('missing');
    expect(safeEval(expr, { value: 11 }).nextState).to.equal('ok');
  });

  it('works with expressions', () => {
    const expr = `
  (function(name, age) {
    function something() {
      return { name, age };
    }

    return something();
  })(name, age);
  `;
    expect(safeEval(expr, {name: 'Felipe', age: 12})).to.deep.equal({ name: 'Felipe', age: 12 });
  });

  it('works with expression starting with comments', () => {
    const expr = fs.readFileSync('fixture/rule.js').toString();
    const instance = { name: 'Felipe' };
    expect(safeEval(expr, { instance }).name).to.eql('Felipe');
  });
});

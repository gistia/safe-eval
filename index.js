module.exports = (expr, context) => {
  with(context) {
    return eval(expr);
  }
};

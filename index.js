module.exports = (expr, context={}) => {
  if (!expr) { return; }
  with(context) {
    return eval(`(function() { return ${expr.trim()} })()`);
  }
};

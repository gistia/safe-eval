module.exports = (expr, context={}) => {
  if (!expr) { return; }
  var key = 'GISTIA_SAFE_EVAL_' + Math.floor(Math.random() * 1000000);
  context[key] = undefined;
  with(context) {
    eval(`${key} = ${expr.trim()};`);
  }
  return context[key];
};

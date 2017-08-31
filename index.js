module.exports = function(expr, context) {
  if (!expr) { return; }
  var key = 'GISTIA_SAFE_EVAL_' + Math.floor(Math.random() * 1000000);
  context = context || {};
  context[key] = undefined;
  with(context) {
    var expr = key + ' = ' + expr.trim() + ';';
    eval(expr);
  }
  return context[key];
};

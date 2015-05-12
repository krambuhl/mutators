var Mutators = require('../index.js');
var extend = require('extend');
var test = require('tape');

test('object.get(prop)', function (t) {
  var obj = extend({ test: 'ballz' }, Mutators);

  t.plan(1);
  t.equal(obj.get('test'), 'ballz');
});

test('object.set(prop, val)', function (t) {
  var obj = extend({ }, Mutators);
  obj.set('test', 'ballz');

  t.plan(1);
  t.equal(obj.get('test'), 'ballz');
});

test('object.set(obj)', function (t) {
  var obj = extend({ }, Mutators);
  obj.set({ test: 'ballz', hello: 'world' });

  t.plan(2);
  t.equal(obj.get('test'), 'ballz');
  t.equal(obj.get('hello'), 'world');
});

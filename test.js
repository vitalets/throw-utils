const test = require('tape');
const {throwError, throwIf, throwAsync, toError} = require('.');

test('throwError', t => {
  t.plan(1);
  t.throws(() => throwError('Err'), /Err/);
});

test('throwIf: throw if true', t => {
  t.plan(1);
  t.throws(() => throwIf(true, new Error('Err')), /Err/);
});

test('throwIf: does not throw if false', t => {
  t.plan(1);
  t.doesNotThrow(() => throwIf(false, new Error('Err')));
});

test('throwAsync', t => {
  t.plan(2);
  t.doesNotThrow(() => throwAsync('Err'));
  process.once('uncaughtException', e => t.equal(e.message, 'Err'));
});

test('toError', t => {
  t.plan(5);
  t.ok(toError('Err') instanceof Error);
  t.ok(toError(new Error('Err')) instanceof Error);
  t.ok(toError(null) instanceof Error);
  t.ok(toError(1) instanceof Error);
  t.ok(toError([1, 2]) instanceof Error);
});

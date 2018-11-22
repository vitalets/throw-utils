const test = require('tape');
const {throwError, throwIf, throwAsync, ensureError} = require('.');

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

test('ensureError', t => {
  t.plan(2);
  t.ok(ensureError('Err') instanceof Error);
  t.ok(ensureError(new Error('Err')) instanceof Error);
});

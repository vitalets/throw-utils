import assert from 'assert';
import { throwError, throwIf, toError } from '../src/index.js';

it('throwError', () => {
  assert.throws(() => throwError('foo'), /foo/);
  assert.throws(() => throwError(new Error('bar')), /bar/);
  assert.throws(() => throwError(() => 'baz'), /baz/);
});

it('throwIf: throw if true', () => {
  assert.throws(() => throwIf(true, new Error('foo')), /foo/);
});

it('throwIf: throw if true', () => {
  assert.throws(() => throwIf(true, new Error('foo')), /foo/);
});

it('throwIf: does not throw if false', () => {
  assert.doesNotThrow(() => throwIf(false, new Error('foo')), /foo/);
});

it('toError', () => {
  assert.ok(toError('foo') instanceof Error);
  assert.ok(toError(new Error('foo')) instanceof Error);
});

it('stacktrace: throw-utils should take only one line in stack', () => {
  const fn = () => throwError('foo');
  assert.throws(fn, e => {
    const stack = (e as Error).stack!;
    const index = stack.split('\n').findIndex(line => line.indexOf('at fn') >= 0);
    assert.equal(index, 2, stack);
    return true;
  });
});

/**
 * IMPORTANT: There is some copy-paste parts in this file.
 * It is needed to avoid extra lines in stacktrace.
 */

export type ErrorLike = string | Error | (() => string | Error);

/**
 * Throws new error. Allows simple usage of `throw` in expressions and arrow functions.
 *
 * @example
 * import { throwError } from 'throw-utils';
 *
 * // usage in expression
 * const foo = value || throwError('Empty value');
 *
 * // usage in arrow function
 * setTimeout(() => throwError('foo'), 1000);
 */
export function throwError(msg: ErrorLike): never {
  msg = typeof msg === 'function' ? msg() : msg;
  const error = typeof msg === 'string' ? new Error(msg) : msg;
  throw error;
}

/**
 * Conditionally throws error. Convenient replacement of `if...throw` block with one-liner:
 *
 * @example
 * import { throwIf } from 'throw-utils';
 *
 * throwIf(foo > 10, 'foo');
 * throwIf(foo > 10, new Error('foo'));
 * throwIf(foo > 10, () => `foo: ${JSON.stringify(data)}`); // lazy calculated Error
 */
export function throwIf(condition: unknown, msg: ErrorLike) {
  if (condition) {
    msg = typeof msg === 'function' ? msg() : msg;
    const error = typeof msg === 'string' ? new Error(msg) : msg;
    throw error;
  }
}

/**
 * Converts anything to Error.
 */
export function toError(msg: ErrorLike) {
  msg = typeof msg === 'function' ? msg() : msg;
  const error = typeof msg === 'string' ? new Error(msg) : msg;
  return error;
}

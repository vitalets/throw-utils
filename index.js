/**
 * IMPORTANT: There is some copy-paste parts in this file.
 * It is needed to avoid extra lines in stacktrace.
 */

/**
 * Throws new error. Allows simple usage of `throw` in expressions and arrow functions.
 *
 * @param {String|Error} error
 * @example
 * // usage in expression
 * const foo = value || throwError('Error');
 *
 * // usage in arrow function
 * setTimeout(() => throwError('Error'), 1000);
 */
exports.throwError = error => {
  error = Array.isArray(error) ? error.join() : error;
  error = (error && typeof error === 'object') ? error : new Error(error);
  throw error;
};

/**
 * Conditionally throws error. Convenient replacement of `if...throw` block with one-liner:
 *
 * @param {*} condition
 * @param {String|Error|Function} error
 *
 * @example
 * throwIf(foo > 10, 'my error');
 * throwIf(foo > 10, new Error('my error'));
 * throwIf(foo > 10, () => `my error: ${JSON.stringify(data)}`); // lazy calculated Error
 */
exports.throwIf = (condition, error) => {
  if (condition) {
    error = typeof error === 'function' ? error() : error;
    error = Array.isArray(error) ? error.join() : error;
    error = (error && typeof error === 'object') ? error : new Error(error);
    throw error;
  }
};

/**
 * Throws error in next event loop tick.
 * Useful to throw error out of promise chain.
 *
 * @param {String|Error} error
 *
 * @example
 * Promise.resolve()
 *   .then(...)
 *   .catch(e => throwAsync(e));
 */
exports.throwAsync = error => {
  setTimeout(() => {
    error = Array.isArray(error) ? error.join() : error;
    error = (error && typeof error === 'object') ? error : new Error(error);
    throw error;
  }, 0);
};

/**
 * Converts anything to Error.
 *
 * @param {String|Error} value
 * @returns {Error}
 */
exports.toError = value => {
  value = Array.isArray(value) ? value.join() : value;
  const error = (value && typeof value === 'object') ? value : new Error(value);
  return error;
};

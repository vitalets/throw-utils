/**
 * Exports for ESM
 * See: https://nodejs.org/api/esm.html#esm_approach_1_use_an_es_module_wrapper
 */

import throwUtils from './index.js';
export default throwUtils;
export const throwError = throwUtils.throwError;
export const throwIf = throwUtils.throwIf;
export const throwAsync = throwUtils.throwAsync;
export const toError = throwUtils.toError;

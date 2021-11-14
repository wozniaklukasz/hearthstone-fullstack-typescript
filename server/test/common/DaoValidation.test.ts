import { errorCodes } from '../../src/const';
import DaoValidation from '../../src/modules/common/DaoValidation';

describe('DaoValidation id validation', () => {
  it('throws error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(() => DaoValidation.validateId('123')).toThrow(expectedError);
  });

  it('do nothing if id is correct', () => {
    return expect(() => DaoValidation.validateId('6165c29b1e5377d3327c6364')).not.toThrow();
  });
});

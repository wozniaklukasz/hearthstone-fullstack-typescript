import { errorCodes } from '../../src/const';
import DaoValidationService from '../../src/modules/common/daoValidationService';

describe('DaoValidationService id validation', () => {
  it('throws error if id is incorrect', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    return expect(() => DaoValidationService.validateId('123')).toThrow(expectedError);
  });

  it('do nothing if id is correct', () => {
    return expect(() => DaoValidationService.validateId('6165c29b1e5377d3327c6364')).not.toThrow();
  });
});

import { Request } from 'express';
import { errorCodes } from '../../src/const';
import ControllerValidation from '../../src/modules/common/ControllerValidation';

describe('ControllerValidation', () => {
  it('throws error if id does not exist', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    const req = {} as Request;

    return expect(() => ControllerValidation.requestContainsParamId(req)).toThrow(expectedError);
  });

  it('NOT throws error if id exist', () => {
    const req = { params: { id: '1' } } as unknown as Request;

    return expect(() => ControllerValidation.requestContainsParamId(req)).not.toThrow();
  });
});

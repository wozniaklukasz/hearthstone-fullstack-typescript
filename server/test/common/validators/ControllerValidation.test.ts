import { Request } from 'express';
import { errorCodes } from '../../../src/const';
import ControllerService from '../../../src/modules/common/validators/ControllerService';

describe('ControllerService', () => {
  it('throws error if id does not exist', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    const req = {} as Request;

    return expect(() => ControllerService.getIdFromRequest(req)).toThrow(expectedError);
  });

  it('NOT throws error if id exist', () => {
    const req = { params: { id: '1' } } as unknown as Request;

    return expect(() => ControllerService.getIdFromRequest(req)).not.toThrow();
  });
});

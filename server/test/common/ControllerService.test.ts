import { Request } from 'express';
import { errorCodes } from '../../src/const';
import ControllerService from '../../src/modules/common/ControllerService';

describe('ControllerService', () => {
  it('throws error if id does not exist', () => {
    const expectedError = new Error(errorCodes.INVALID_ID);

    const req = {} as Request;

    return expect(() => ControllerService.getIdFromRequest(req)).toThrow(expectedError);
  });

  it('if id exist returns it', () => {
    const req = { params: { id: '1' } } as unknown as Request;

    const id = ControllerService.getIdFromRequest(req);

    return expect(id).toBe('1');
  });
});

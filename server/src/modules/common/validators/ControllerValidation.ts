import { Request } from 'express';
import { errorCodes } from '../../../const';

abstract class ControllerValidation {
  static requestContainsParamId(req: Request) {
    if (!req || !req.params || !req.params.id) {
      throw new Error(errorCodes.INVALID_ID);
    }
  }
}

export default ControllerValidation;

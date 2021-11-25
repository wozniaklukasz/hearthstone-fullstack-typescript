import { Request } from 'express';
import { errorCodes } from '../../const';

abstract class ControllerService {
  static getIdFromRequest(req: Request): string {
    if (!req || !req.params || !req.params.id) {
      throw new Error(errorCodes.INVALID_ID);
    }

    return req.params.id;
  }
}

export default ControllerService;

import { errorCodes } from '../../const';

class DaoValidationService {
  static validateId(id: string) {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      throw new Error(errorCodes.INVALID_ID);
    }
  }
}

export default DaoValidationService;
import { GetCardDto } from 'commons/lib/dtos';
import { ICardsDao } from './interfaces';
import { CardDocument, ICardModel } from '../../model/card';
import { DB_QUERY_LIMIT, errorCodes } from '../../const';
import DaoValidation from '../common/DaoValidation';
import { mapDaoListToDtoList, mapDaoToDto } from './utils';

class CardsDaoFactory implements ICardsDao {
  private cardModel: ICardModel;

  constructor(cardModel: ICardModel) {
    this.cardModel = cardModel;
  }

  async getCards(): Promise<GetCardDto[]> {
    const cards: CardDocument[] = await this.cardModel.find({}).limit(DB_QUERY_LIMIT);
    return mapDaoListToDtoList(cards);
  }

  async getCardById(id: string): Promise<GetCardDto> {
    DaoValidation.validateId(id);

    const card: CardDocument | null = await this.cardModel.findOne({ _id: id });

    if (card) return mapDaoToDto(card);

    throw new Error(errorCodes.CARD_NOT_FOUND);
  }
}

export default CardsDaoFactory;

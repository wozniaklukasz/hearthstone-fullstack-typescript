import CardsDaoFactory from './cards.dao.factory';
import { CardModel } from '../../model/card';

const CardsDao = () => new CardsDaoFactory(CardModel);

export default CardsDao;

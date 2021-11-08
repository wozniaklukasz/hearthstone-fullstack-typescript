import CardsControllerFactory from './cards.controller.factory';
import CardsDao from './cards.dao';

const CardsController = () => new CardsControllerFactory(CardsDao());

export default CardsController;

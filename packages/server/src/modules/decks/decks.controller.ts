import DecksControllerFactory from './decks.controller.factory';
import DecksDao from './decks.dao';

const DecksController = () => new DecksControllerFactory(DecksDao());

export default DecksController;

import DecksDaoFactory from "./decks.dao.factory";
import {DeckModel} from "../model";

const DecksDao = () => new DecksDaoFactory(DeckModel);

export default DecksDao;

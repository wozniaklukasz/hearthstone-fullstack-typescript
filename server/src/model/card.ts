import { Schema, model, Model, Document } from 'mongoose';
import { ECardClass, ECardFaction, ECardMechanics, ECardRarity, ECardSet, ECardType } from '../modules/cards/enums';

type CardDocument = Partial<Document> & {
  imageId: string;
  name: string;
  text: string;
  flavor: string;
  artist: string;
  attack: number;
  cardClass: ECardClass | null;
  collectible: boolean;
  cost: number;
  elite: boolean;
  faction: ECardFaction | null;
  health: number;
  mechanics: ECardMechanics[] | null;
  rarity: ECardRarity | null;
  cardSet: ECardSet | null;
  type: ECardType | null;
};

interface ICardModel extends Model<CardDocument> {}

const schema = new Schema<CardDocument>({
  imageId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  text: String,
  flavor: String,
  artist: String,
  attack: Number,
  cardClass: {
    type: String,
    enum: ECardClass,
  },
  collectible: Boolean,
  cost: Number,
  elite: Boolean,
  faction: {
    type: String,
    enum: ECardFaction,
  },
  health: Number,
  mechanics: {
    type: [String],
    enum: Object.values(ECardClass),
  },
  rarity: {
    type: String,
    enum: ECardRarity,
  },
  set: {
    type: String,
    enum: ECardSet,
  },
  type: {
    type: String,
    enum: ECardType,
  },
});

const CardModel: ICardModel = model('Card', schema);

export { CardModel, ICardModel, CardDocument };

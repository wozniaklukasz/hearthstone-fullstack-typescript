import { Schema, model, Model, Document } from 'mongoose';
import { CreateCardDto } from 'commons/lib/dtos';
import { ECardClass, ECardFaction, ECardMechanics, ECardRarity, ECardSet, ECardType } from 'commons/lib/enums';

type CardDocument = Partial<Document> & CreateCardDto;

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
    enum: Object.values(ECardMechanics),
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

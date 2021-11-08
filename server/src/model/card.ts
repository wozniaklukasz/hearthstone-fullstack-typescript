import { Schema, model, Model, Document } from 'mongoose';

// todo: replace any with enums
type CardDocument = Partial<Document> & {
  imageId: string;
  name: string;
  text: string;
  flavor: string;
  artist: string;
  attack: number;
  cardClass: any;
  collectible: boolean;
  cost: number;
  elite: boolean;
  faction: any;
  health: number;
  mechanics: any[];
  rarity: any;
  set: any;
  type: any;
};

interface ICardModel extends Model<CardDocument> {}

// todo: replace Mixed with enums
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
  cardClass: Schema.Types.Mixed,
  collectible: Boolean,
  cost: Number,
  elite: Boolean,
  faction: Schema.Types.Mixed,
  health: Number,
  mechanics: Schema.Types.Mixed,
  rarity: Schema.Types.Mixed,
  set: Schema.Types.Mixed,
  type: Schema.Types.Mixed,
});

const CardModel: ICardModel = model('Card', schema);

export { CardModel, ICardModel, CardDocument };

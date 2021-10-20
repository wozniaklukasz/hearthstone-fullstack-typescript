import { Schema, model, Model, Document } from 'mongoose';

type TDeckDocument = Partial<Document> & {
  title: string;
  createdAt: string;
  updatedAt: string;
};

interface IDeckModel extends Model<TDeckDocument> {}

const schema = new Schema<TDeckDocument>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const DeckModel: IDeckModel = model('Deck', schema);

export { DeckModel, IDeckModel, TDeckDocument };

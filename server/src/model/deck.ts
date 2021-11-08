import { Schema, model, Model, Document } from 'mongoose';

type DeckDocument = Partial<Document> & {
  title: string;
  createdAt: string;
  updatedAt: string;
};

interface IDeckModel extends Model<DeckDocument> {}

const schema = new Schema<DeckDocument>(
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

export { DeckModel, IDeckModel, DeckDocument };

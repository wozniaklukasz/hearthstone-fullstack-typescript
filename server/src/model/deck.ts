import { Schema, model, Model, Document } from 'mongoose';

interface IDeck extends Document {
  title: string;
  createdAt: string;
  updatedAt: string;
}

type IDeckModel = Model<IDeck>;

const schema = new Schema<IDeck>(
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

export { DeckModel, IDeckModel };

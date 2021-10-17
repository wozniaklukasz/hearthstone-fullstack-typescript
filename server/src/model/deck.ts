import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const deckSchema = new Schema(
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

export default mongoose.model('Deck', deckSchema);

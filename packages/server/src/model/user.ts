import { Schema, model, Model, Document } from 'mongoose';

type UserDocument = Partial<Document> & {
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
};

interface IUserModel extends Model<UserDocument> {}

const schema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const UserModel: IUserModel = model('User', schema);

export { UserModel, IUserModel, UserDocument };

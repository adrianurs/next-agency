import mongoose, { Schema } from 'mongoose';

const schema = new Schema(
  {
    title: { type: String, required: true, min: 10, max: 50 },
    description: { type: String, required: true, min: 20, max: 100 },
    image: { type: String, default: '' },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true, _id: true }
);

export const Post = mongoose.models?.Post || mongoose.model('Post', schema);

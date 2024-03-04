import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 15 },
    email: { type: String, required: true, unique: true, max: 50 },
    password: { type: String, required: true },
    avatar: { type: String, default: '' },
    isAdmin: { type: Boolean, default: false }
  },
  { timestamps: true, _id: true }
);

export const User = mongoose.models?.User || mongoose.model('User', schema);

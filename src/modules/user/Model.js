import mongoose from 'mongoose';

//const { Schema } = mongoose; same thing as below line
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: String,
});

userSchema.index({ email: 1 }, { unique: true });

export default mongoose.model('User', userSchema);

import { string } from '@hapi/joi';
import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String
    },

    LastName: {
      type: String
    }    
 },
  {
    timestamps: true
  }
);

export default model('User', userSchema);

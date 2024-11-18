import mongoose, { Document, PassportLocalDocument, Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

// Interface for the user schema
export interface IUser extends PassportLocalDocument {
  username: string;
  emailAddress: string;
  displayName: string;
  created: Date;
  updated: Date;
}

// User schema definition
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
}, {
  collection: 'users',
});

// Add Passport-Local Mongoose plugin to the user schema
userSchema.plugin(passportLocalMongoose);

// Define and export the User model
const User = mongoose.model<IUser>('User', userSchema);

// Type definition for UserDocument, extending Mongoose Document
export type UserDocument = Document & {
  _id: string;
  username: string;
  emailAddress: string;
  displayName: string;
};

export default User;

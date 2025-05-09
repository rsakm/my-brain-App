
import {model, Schema} from 'mongoose';

// Defining the schemas

const userSchema = new Schema({
    userName: {type:String, unique: true},
    password: String
});



// Defining the models
export const UserModel = model('User', userSchema);



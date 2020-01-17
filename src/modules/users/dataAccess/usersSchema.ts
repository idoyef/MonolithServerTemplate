import { Schema } from 'mongoose';

export const usersSchema = new Schema({
    username: { type: String, required: true }
})
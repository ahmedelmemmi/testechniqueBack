import mongoose, { Schema } from 'mongoose';
import logging from '../config/logging';
import IPost from '../interfaces/post';

const PostSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        publiePar: { type: String, required: true }

    },
    {
        timestamps: true
    }
);


export default mongoose.model<IPost>('Posts', PostSchema);
import { Schema, model, Types } from 'mongoose';
import MyList, { IBreed } from '@/resources/mylist/mylist.interface';

const MyListSchema = new Schema(
    {
        id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        breeds: {
            type: Array,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
    },
    { 
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } 
    }
);

export default model<MyList>('mylist', MyListSchema);
